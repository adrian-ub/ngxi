import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMpIcon],svg[material-symbols-light-mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.308 14.692h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884v-4.615q0-.327-.22-.548q-.222-.221-.549-.221H7.077q-.327 0-.548.22q-.221.222-.221.549zm7.5 0h.884v-1.5h2.231q.327 0 .548-.22q.221-.222.221-.549v-2.346q0-.327-.22-.548q-.222-.221-.549-.221h-3.115zm.884-2.384v-2.116h2.116v2.116zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLightMpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
