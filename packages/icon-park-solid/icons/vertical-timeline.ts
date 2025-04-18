import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVerticalTimelineIcon],svg[icon-park-solid-vertical-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M4 5h40M4 43h40M8 36v7"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M12 28H4v8h8zm16-8h-8v8h8zm16-8h-8v8h8z"></svg:path><svg:path stroke-linecap="round" d="M40 20v23M8 12v1m0 7v1m15-9v1m1 15v15"></svg:path></svg:g>`,
})
export class IconParkSolidVerticalTimelineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
