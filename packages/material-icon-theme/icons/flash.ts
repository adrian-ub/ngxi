import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFlashIcon],svg[material-icon-theme-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e53935" d="M20.314 2c-2.957 0-5.341 1.104-7.122 3.252c-1.427 1.752-2.354 3.93-3.164 6.034c-1.663 4.283-2.781 6.741-6.342 6.741V22c2.958 0 5.342-1.03 7.122-3.194c1.133-1.383 1.957-3.135 2.634-4.827h4.665v-3.973h-3.061c1.207-2.575 2.546-3.973 5.268-3.973z"></svg:path>`,
})
export class MaterialIconThemeFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
