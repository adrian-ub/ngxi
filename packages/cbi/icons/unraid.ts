import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiUnraidIcon],svg[cbi-unraid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.505 9.107h.975v5.771h-.975zm-8.53 5.771H2V9.107h.975zm3.778.69h.975v2.205h-.975ZM4.37 13.094h.974v3.568h-.975Zm4.752 0h.978v3.568h-.978Zm11.9-3.987H22v5.771h-.975Zm-3.778-.675h-.975v-2.2h.975zm2.386 2.458h-.974V7.338h.975zm-4.767 0h-.975V7.338h.975z"></svg:path>`,
})
export class CbiUnraidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
