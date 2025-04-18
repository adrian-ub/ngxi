import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siJsonAlt4LineIcon],svg[si-json-alt-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 20h-.184c-1.626-.009-2.408-.306-2.408-2.01v-4.172c0-1.215-1.45-1.774-2.408-1.862v-.166c.967-.087 2.408-.69 2.408-1.887V6.01c0-1.695.782-2.001 2.408-2.01H7m10 16h.184c1.626-.009 2.408-.306 2.408-2.01v-4.172c0-1.215 1.45-1.774 2.408-1.862v-.166c-.967-.087-2.408-.69-2.408-1.887V6.01c0-1.695-.782-2.001-2.408-2.01H17m-5.002 11a22 22 0 0 1-.492 1.624q-.3.876-.662 1.73A39 39 0 0 1 10.16 20M13 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SiJsonAlt4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
