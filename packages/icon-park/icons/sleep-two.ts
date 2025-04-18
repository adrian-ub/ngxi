import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSleepTwoIcon],svg[icon-park-sleep-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 12L4 36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 29L44 36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 29L4 29"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M22 16L22 29L44 29L44 19C44 17.3431 42.6569 16 41 16L22 16Z"></svg:path><svg:circle cx="13" cy="20" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkSleepTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
