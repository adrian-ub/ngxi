import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRedEyeIcon],svg[openmoji-red-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#D22F27"></svg:circle><svg:circle r="18" fill="#EA5A47" transform="matrix(-1 0 0 1 36 36)"></svg:circle><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M54.125 36c0-2.118-.363-4.152-1.031-6.042c-2.489-7.04-9.202-12.083-17.094-12.083"></svg:path><svg:circle cx="36" cy="36" r="10" fill="#F1B31C"></svg:circle><svg:circle cx="36" cy="36" r="5" fill="#FCEA2B"></svg:circle><svg:circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-width="2"></svg:circle>`,
})
export class OpenmojiRedEyeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
