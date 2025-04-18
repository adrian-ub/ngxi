import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPumpkinIcon],svg[icon-park-pumpkin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="40" height="26" x="4" y="14" fill="#2F88FF" rx="13"></svg:rect><svg:ellipse cx="24" cy="27" rx="8" ry="13"></svg:ellipse><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 6H27C25.3431 6 24 7.34315 24 9V14"></svg:path></svg:g>`,
})
export class IconParkPumpkinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
