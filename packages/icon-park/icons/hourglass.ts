import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHourglassIcon],svg[icon-park-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 4H40"></svg:path><svg:path d="M8 44H40"></svg:path><svg:path d="M12 4V16L21 26"></svg:path><svg:path d="M36 44V29.5L27 21"></svg:path><svg:path d="M12 44V30L18.5 23.5"></svg:path><svg:path d="M36 4V16L29.5 23.5"></svg:path><svg:path d="M18 33H19"></svg:path><svg:path d="M29.1465 32.6465L29.8536 33.3536"></svg:path><svg:path d="M24 38H25"></svg:path></svg:g>`,
})
export class IconParkHourglassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
