import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSwitchTrackIcon],svg[icon-park-switch-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 4V18L8 30L8 44"></svg:path><svg:path d="M8 22V17"></svg:path><svg:path d="M8 9V4"></svg:path><svg:path d="M40 44V39"></svg:path><svg:path d="M40 31V26"></svg:path></svg:g>`,
})
export class IconParkSwitchTrackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
