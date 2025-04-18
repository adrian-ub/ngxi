import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpIceSkatingIcon],svg[ic-sharp-ice-skating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17c0 1.66-1.34 3-3 3h-2v-2h3l-.01-6l-5.71-1.43A3 3 0 0 1 11.32 9H8V8h3.02L11 7H8V6h3V3H3v15h3v2H2v2h16c2.76 0 5-2.24 5-5zm-7 3H8v-2h6z"></svg:path>`,
})
export class IcSharpIceSkatingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
