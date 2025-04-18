import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAutoAwesomeMosaicIcon],svg[ic-sharp-auto-awesome-mosaic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h8V3H3zM21 3h-8v8h8zm-8 18h8v-8h-8z"></svg:path>`,
})
export class IcSharpAutoAwesomeMosaicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
