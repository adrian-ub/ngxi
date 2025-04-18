import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPortraitModeIcon],svg[flat-color-icons-portrait-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF9800" d="M22 38c-4.8 0-5-7-5-7v-6h10v6s-.2 7-5 7"></svg:path><svg:g fill="#FFA726"><svg:circle cx="31" cy="19" r="2"></svg:circle><svg:circle cx="13" cy="19" r="2"></svg:circle></svg:g><svg:path fill="#FFB74D" d="M31 13c0-7.6-18-5-18 0v7c0 5 4 9 9 9s9-4 9-9z"></svg:path><svg:path fill="#424242" d="M22 4c-6.1 0-10 4.9-10 11v2.3l2 1.7v-5l12-4l4 4v5l2-1.7V15c0-4-1-8-6-9l-1-2z"></svg:path><svg:g fill="#784719"><svg:circle cx="26" cy="19" r="1"></svg:circle><svg:circle cx="18" cy="19" r="1"></svg:circle></svg:g><svg:path fill="#009688" d="M27 31s-1.8 2-5 2s-5-2-5-2S6 33 6 44h32c0-11-11-13-11-13"></svg:path><svg:g fill="#FF9800"><svg:path d="m40.997 4.065l7 7l-7 6.999l-7-7z"></svg:path><svg:path d="M36 6h10v10H36z"></svg:path></svg:g><svg:circle cx="41" cy="11" r="3" fill="#FFEB3B"></svg:circle>`,
})
export class FlatColorIconsPortraitModeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
