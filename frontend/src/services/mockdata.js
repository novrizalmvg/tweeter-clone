import User from '../models/User'

const userData = [
    {
        id: '12a1s3dz24c635q2e213a2dw1',
        username: '@novrizal',
        password: 'password',
        profile: {
            pic: 'https://api.duniagames.co.id/api/content/upload/file/184568161671541288.jpg',
            pic_full: 'https://api.duniagames.co.id/api/content/upload/file/184568161671541288.jpg',
            pic_cover: 'https://i.pinimg.com/originals/49/89/70/498970d2f45988eae9d6a2eb59bc450f.jpg',
            description: 'Somedescription goes there...',
            nickname: '@novrizal',
            name: 'Novrizal',
            website: 'https://novrizal.com'
        },
        account: {
            followingCount: '515',
            followerCount: '152'
        }
    }
]

export const users = [
    new User(userData[0])
]

export const userOneAuthInfo = {
    username: userData[0].username,
    password: userData[0].password
}

export const tweets = []

export const trends = [
    {
        name: '#Salı',
        tweetsCount: 155614
    },
    {
        name: '#ProductHunt',
        tweetsCount: 121353
    },
    {
        name: '#DummyTrend',
        tweetsCount: 90420
    }
]