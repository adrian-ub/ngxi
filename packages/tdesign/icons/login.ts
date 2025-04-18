import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLoginIcon],svg[tdesign-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11h9.586l-3.5-3.5L10.5 6.086L16.414 12L10.5 17.914L9.086 16.5l3.5-3.5H3zm11 8.5h5v-15h-5v-2h7v19h-7z"></svg:path>`,
})
export class TdesignLoginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
