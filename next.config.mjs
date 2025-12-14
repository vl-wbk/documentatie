import nextra from 'nextra'

const withNextra = nextra({
    output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
})

export default withNextra({
    output: 'export',
})
