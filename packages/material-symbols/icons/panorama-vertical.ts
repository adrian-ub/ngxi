import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPanoramaVerticalIcon],svg[material-symbols-panorama-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.425 0-.712-.288T4 21q0-.2.238-.888t.512-1.837t.513-2.712T5.5 12t-.238-3.562t-.512-2.713t-.513-1.837T4 3q0-.425.288-.712T5 2h14q.425 0 .713.288T20 3q0 .2-.238.888t-.512 1.837t-.513 2.713T18.5 12t.238 3.563t.512 2.712t.513 1.838T20 21q0 .425-.288.713T19 22z"></svg:path>`,
})
export class MaterialSymbolsPanoramaVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
