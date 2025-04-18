import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAdobeSwcIcon],svg[material-icon-theme-adobe-swc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e53935" d="M4 5v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m20 7c-2.926 0-4.21.722-5.012 2H22v4h-4.582C16.34 20.857 14.393 24 8 24v-4c4.559 0 5.14-1.744 6.103-4.632C15.139 12.258 16.559 8 24 8Z"></svg:path>`,
})
export class MaterialIconThemeAdobeSwcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
