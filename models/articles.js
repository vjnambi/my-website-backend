module.exports = (sequelize, DataTypes) => {

    const articles = sequelize.define("articles",
    {
        title: {type: DataTypes.STRING, allowNull: false},
        text: {type: DataTypes.TEXT, allowNull: false}
    })

    return articles

}