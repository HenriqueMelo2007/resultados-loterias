interface numeroDezena {
  numeroDezena: number,
}

export function NumeroResultado ({numeroDezena}: numeroDezena) {


  return (
    <>
      <div className="boxNumeroDezena">
        <h2 className="numeroDezena">{numeroDezena}</h2>
      </div>
    </>
  )
}