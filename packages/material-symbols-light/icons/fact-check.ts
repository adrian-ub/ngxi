import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFactCheckIcon],svg[material-symbols-light-fact-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 20q-.691 0-1.153-.462T3 18.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v12.769q0 .69-.463 1.153T19.385 20zm.884-3.5h4v-1h-4zm9.05-2.211l4.238-4.239l-.713-.714l-3.525 3.55l-1.425-1.424l-.688.713zM5.5 12.5h4v-1h-4zm0-4h4v-1h-4z"></svg:path>`,
})
export class MaterialSymbolsLightFactCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
