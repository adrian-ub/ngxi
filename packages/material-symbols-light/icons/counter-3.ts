import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCounter3Icon],svg[material-symbols-light-counter-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M9.5 16.5h3.378q.697 0 1.16-.462t.462-1.153V13.23q0-.592-.31-.883q-.31-.29-.69-.348q.38-.058.69-.348t.31-.883V9.115q0-.69-.462-1.153t-1.16-.462H9.5v1h3.385q.269 0 .442.173t.173.443v1.769q0 .269-.173.442t-.442.173h-1.77v1h1.77q.269 0 .442.173t.173.443v1.769q0 .269-.173.442t-.442.173H9.5z"></svg:path>`,
})
export class MaterialSymbolsLightCounter3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
