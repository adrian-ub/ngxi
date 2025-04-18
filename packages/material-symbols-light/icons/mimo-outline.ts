import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMimoOutlineIcon],svg[material-symbols-light-mimo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.192 20v-1.538l.77-.77H4.616q-.691 0-1.153-.462T3 16.077V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.461q0 .69-.463 1.153t-1.153.462h-3.346l.77.77V20zm-2.577-3.308h14.77q.23 0 .423-.192t.192-.423V5.616q0-.231-.192-.424T19.385 5H4.615q-.23 0-.423.192T4 5.616v10.461q0 .23.192.423t.423.192m-.615 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightMimoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
