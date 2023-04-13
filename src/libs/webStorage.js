const createStorage = (PREFIX) => {
  function save(key, value, prefix = PREFIX) {
    try {
      const savedValue = JSON.stringify(value)
      localStorage.setItem(`${prefix}${key}`, savedValue)
      return savedValue
    } catch (e) {
      console.error('Error in storage.save', e)
      return null
    }
  }

  function load(key, parse = true, prefix = PREFIX) {
    try {
      const value = localStorage.getItem(`${prefix}${key}`)
      return value && parse ? JSON.parse(value) : value
    } catch (e) {
      console.error('Error in storage.load', e)
      return null
    }
  }

  function clear(key, prefix = PREFIX) {
    try {
      return localStorage.removeItem(`${prefix}${key}`)
    } catch (e) {
      console.error('Error in storage.clear', e)
    }
  }

  function clearAll() {
    try {
      return localStorage.clear()
    } catch (e) {
      console.error('Error in storage.clearAll', e)
    }
  }

  return {
    save,
    load,
    clear,
    clearAll
  }
}

export const storage = createStorage('admin-hype-')


