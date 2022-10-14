// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { link } = req.body


    try {
        const response = await fetch(link)

        console.log(response.body.js)

        return res.status(201).json(response.body.json())

    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() })
    }
}
