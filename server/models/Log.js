import DataTypes from 'sequelize';

const Log = (sequelize) => {
    let model = sequelize.define('Log', {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        beginDate: { type: DataTypes.DATE, allowNull: false },
        endDate: { type: DataTypes.DATE, allowNull: false },
        description: DataTypes.TEXT
    }, {
        tableName: 'logs',
        timestamps: false
    });

    return model;
};

export default Log;