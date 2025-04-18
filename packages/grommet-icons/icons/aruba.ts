import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsArubaIcon],svg[grommet-icons-aruba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.11 17.302c-3.074 0-5.602-2.46-5.602-5.465s2.528-5.465 5.602-5.465s5.601 2.46 5.601 5.465s-2.527 5.465-5.601 5.465M12.11 2C6.508 2 2 6.44 2 11.837c0 5.465 4.508 9.836 10.11 9.836c2.323 0 4.44-.751 6.148-2.049c1.025 1.708 3.962 2.05 3.962 2.05v-9.837C22.22 6.44 17.71 2 12.11 2"></svg:path>`,
})
export class GrommetIconsArubaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
