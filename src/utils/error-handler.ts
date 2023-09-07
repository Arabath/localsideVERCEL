export async function handler<K>(response: Response) {
  try {
    if (response.status === 500) {
      throw new Error('internalServerError')
    }

    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.error.message)
    }

    return data as K
  } catch (error) {
    console.error(error)
    throw error
  }
}
