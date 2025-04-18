import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVerticalTimelineIcon],svg[icon-park-vertical-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M3.99999 5H44"></svg:path><svg:path stroke-linecap="round" d="M3.99999 43H44"></svg:path><svg:path stroke-linecap="round" d="M7.99999 36V43"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M12 28H3.99999V36H12V28Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M28 20H20V28H28V20Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M44 12H36V20H44V12Z"></svg:path><svg:path stroke-linecap="round" d="M40 20V43"></svg:path><svg:path stroke-linecap="round" d="M7.99999 12V13"></svg:path><svg:path stroke-linecap="round" d="M7.99999 20V21"></svg:path><svg:path stroke-linecap="round" d="M23 12V13"></svg:path><svg:path stroke-linecap="round" d="M24 28V43"></svg:path></svg:g>`,
})
export class IconParkVerticalTimelineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
