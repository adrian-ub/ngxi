import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLooks3Icon],svg[material-symbols-light-looks-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 16.5h3.385q.69 0 1.152-.462t.463-1.153V13.23q0-.592-.31-.883q-.31-.29-.69-.348q.38-.058.69-.348t.31-.883V9.115q0-.69-.462-1.153T12.885 7.5H9.5v1h3.385q.269 0 .442.173t.173.443v1.769q0 .269-.173.442t-.442.173h-1.77v1h1.77q.269 0 .442.173t.173.443v1.769q0 .269-.173.442t-.442.173H9.5zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLightLooks3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
