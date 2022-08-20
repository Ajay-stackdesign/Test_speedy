class ApiFeature {
    constructor(query, queryStr) {
        this.query = query
        this.queryStr = queryStr
    }

    search() {
        const ids = this.queryStr.ids
            ? {
                name: {
                    $regex: this.queryStr.ids,
                    $options: "i",
                },
            } : {}

        this.query = this.query.find({ ...ids })
        return this
    }
}

module.exports = ApiFeature