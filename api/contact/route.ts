import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // TODO: Ajouter la base de données ici
    console.log('Message reçu:', { name, email, message })

    return NextResponse.json(
      { message: 'Message reçu avec succès' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json(
      { message: 'Erreur serveur' },
      { status: 500 }
    )
  }
}