import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSaveAltIcon],svg[ic-sharp-save-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12v7H5v-7H3v9h18v-9zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2z"></svg:path>`,
})
export class IcSharpSaveAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
