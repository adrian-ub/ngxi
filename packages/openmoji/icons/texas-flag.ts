import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTexasFlagIcon],svg[openmoji-texas-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 36h62v19H5z"></svg:path><svg:path fill="#1e50a0" d="M6 17h19.67v38H6z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.629" d="m19.68 41.31l-3.854-2.556l-3.859 2.549l1.24-4.455l-3.617-2.882l4.62-.198l1.624-4.33l1.616 4.333l4.62.206l-3.622 2.876z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiTexasFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
