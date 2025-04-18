import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMimoIcon],svg[material-symbols-light-mimo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.192 20v-1.538l.77-.77H4.616q-.691 0-1.153-.462T3 16.077V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.461q0 .69-.463 1.153t-1.153.462h-3.346l.77.77V20z"></svg:path>`,
})
export class MaterialSymbolsLightMimoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
