interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

// const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
export default function ContactFormEmail({
  name,
  email,
  message
}: ContactFormEmailProps) {
  return (
    <div>
      <h1>Contact form submission</h1>
      <p>
        From <strong>{name}</strong> at {email}
      </p>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  )
}
