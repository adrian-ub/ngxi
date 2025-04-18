import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEarbudRightIcon],svg[material-symbols-light-earbud-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.058 21q-.69 0-1.153-.462t-.463-1.153V5h5.943q.69 0 1.152.463T20 6.616v3.442q0 .69-.463 1.153t-1.153.462h-1.173v7.712q0 .69-.462 1.152T15.596 21zM8.96 13.673q-2.115 0-3.538-1.586T4 8.327t1.423-3.75T8.961 3h.731v10.673z"></svg:path>`,
})
export class MaterialSymbolsLightEarbudRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
