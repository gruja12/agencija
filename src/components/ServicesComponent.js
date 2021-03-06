import React from 'react'

function ServicesComponent() {
  return (
    <div className='services_ag'>
        <div className='serv_cont'>
          <div className='serv'>
       Sve što treba Vašem ugostiteljsko-turističkom biznisu <span>na jednom mjestu</span>.
       </div>
       <div className='cta1'>
       <button className='cta-btn1'>SAZNAJTE KAKO VAM MOŽEMO POMOĆI</button>
       </div>
        </div>
        <div className='section-serv'>
          <div className='section-cont1'>
            <h3>Pripremićemo Vas za ugostiteljsko-turistički posao</h3>
            <p>Za Vas ćemo uraditi početno istraživanje tržišta i definisati ciljnu grupu turista. Istražićemo šta radi Vaša konkurencija i predložiti načine kako da vi to uradite bolje.</p>
          </div>
          <div className='section-cont2'>
          <h3>Obučićemo Vaše osoblje kako bi pružilo vrhunsku uslugu</h3>
          <p>Podignite kvalitet Vaših usluga na viši nivo kroz stručnu edukaciju prilagođenu Vašem ugostiteljsko-turističkom objektu.</p>
          </div>
          <div className='section-cont3'>
          <h3>Poštedićemo Vas neprijatnosti duplih rezervacija sa našim softverom</h3>
          <p>Povećajte prodaju i iskorištenost instaliranih kapaciteta primjenom efikasnog softverskog sistema za rezervacije.</p>
          </div>
        </div>
    </div>
  )
}

export default ServicesComponent;