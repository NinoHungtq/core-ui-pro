import { useAuth } from './useAuth'

export const useHasPermission = (
  accessWith, // string[]
  requireAll, // boolean (optional)
) => {
  const { currentUser } = useAuth()
  const permissions = currentUser?.permissions || []

  if (requireAll) {
    return accessWith.every((requiredAccess) => permissions?.includes(requiredAccess))
  }

  return accessWith.some((requiredAccess) => permissions?.includes(requiredAccess))
}
