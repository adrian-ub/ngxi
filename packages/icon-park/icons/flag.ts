import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFlagIcon],svg[icon-park-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 44H12H16"></svg:path><svg:path d="M12 44V4"></svg:path><svg:path fill="#2F88FF" d="M40 6H12V22H40L36 14L40 6Z"></svg:path></svg:g>`,
})
export class IconParkFlagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
