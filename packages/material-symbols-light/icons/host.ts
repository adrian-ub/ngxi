import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHostIcon],svg[material-symbols-light-host-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 20q-.691 0-1.153-.462T3 18.384V5.616q0-.691.463-1.153T4.615 4h4.577q.69 0 1.153.463t.463 1.153v12.769q0 .69-.463 1.153T9.192 20zm10.192 0q-.69 0-1.153-.462t-.463-1.153V5.615q0-.69.463-1.152T14.808 4h4.577q.69 0 1.152.463T21 5.616v12.769q0 .69-.463 1.153T19.385 20zm-9.423-5.615h3v-1h-3zm10.23 0h3v-1h-3zm-10.23-2.808h3v-1h-3zm10.23 0h3v-1h-3zM5.386 8.75h3v-1h-3zm10.23 0h3v-1h-3z"></svg:path>`,
})
export class MaterialSymbolsLightHostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
