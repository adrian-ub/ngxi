import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSmartwatchIcon],svg[openmoji-smartwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9B9B9A" d="M29 4h14v18H29zm0 46h14v18H29z"></svg:path><svg:circle cx="36" cy="36" r="15" fill="#3F3F3F"></svg:circle><svg:path fill="#92D3F5" d="M28 28h6v6h-6z"></svg:path><svg:path fill="#EA5A47" d="M38 28h6v6h-6z"></svg:path><svg:path fill="#92D3F5" d="M38 38h6v6h-6z"></svg:path><svg:path fill="#B399C8" d="M28 38h6v6h-6z"></svg:path><svg:circle cx="36" cy="36" r="15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M29 22V5m14 17V5M29 67V50m14 17V50M33 34h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m10 0h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m0 10h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-10 0h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1"></svg:path><svg:circle cx="36" cy="66" r="2"></svg:circle>`,
})
export class OpenmojiSmartwatchIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
