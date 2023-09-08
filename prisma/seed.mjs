import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

    await prisma.todo.createMany({
        data: [
            {
                title: "Learning Next.js",
                description: "React Framework",
                status: true,
                user_id: 1
            },
            {
                title: "Learning React",
                description: "Frontend Framework",
                status: true,
                user_id: 1
            },
            {
                title: "Learning Prisma",
                description: "ORM",
                status: true,
                user_id: 1
            },
            {
                title: "Bugfixing",
                description: "Error at fetching data",
                status: true,
                user_id: 1
            },
            {
                title: "Implement Feature",
                description: "Feature Login",
                status: true,
                user_id: 1
            },
            {
                title: "Deployment",
                description: "Deploy backend server",
                status: true,
                user_id: 1
            },
            {
                title: "Watching Netflix",
                description: "Some action movies",
                status: true,
                user_id: 1
            },
            {
                title: "Playing Games",
                description: "Games in PC",
                status: true,
                user_id: 1
            }
        ]
    })

    const createdTodos = await prisma.todo.findMany();

    const learn1 = createdTodos[0]
    const learn2 = createdTodos[1]
    const learn3 = createdTodos[2]
    const work1 = createdTodos[3]
    const work2 = createdTodos[4]
    const work3 = createdTodos[5]
    const leisure1 = createdTodos[6]
    const leisure2 = createdTodos[7]


    const tags = await prisma.tag.createMany({
        data: [
            {
                title: "Study",
                todo_id: learn1.id
            },
            {
                title: "Study",
                todo_id: learn2.id
            },
            {
                title: "Study",
                todo_id: learn3.id
            },
            {
                title: "Work",
                todo_id: work1.id
            },
            {
                title: "Work",
                todo_id: work2.id
            },
            {
                title: "Work",
                todo_id: work3.id
            },
            {
                title: "Entertainment",
                todo_id: leisure1.id
            },
            {
                title: "Entertainment",
                todo_id: leisure2.id
            }

        ]
    })



}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })