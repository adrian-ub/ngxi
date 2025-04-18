import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTimerIcon],svg[icon-park-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="28" r="16" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 4L20 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 4V12"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M35 16L38 13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 28V22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 28H18"></svg:path></svg:g>`,
})
export class IconParkTimerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
