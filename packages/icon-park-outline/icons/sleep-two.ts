import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSleepTwoIcon],svg[icon-park-outline-sleep-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 12v24m40-7v7m0-7H4m18-13v13h22V19a3 3 0 0 0-3-3z"></svg:path><svg:circle cx="13" cy="20" r="3"></svg:circle></svg:g>`,
})
export class IconParkOutlineSleepTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
