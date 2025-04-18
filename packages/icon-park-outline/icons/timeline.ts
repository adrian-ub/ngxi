import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTimelineIcon],svg[icon-park-outline-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M13 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0Zm18 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0ZM13 36a4 4 0 1 0 8 0a4 4 0 0 0-8 0Z"></svg:path><svg:path stroke-linecap="round" d="M4 36h9m8 0h23M4 12h9m8 0h23"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 4v40"></svg:path><svg:path stroke-linecap="round" d="M4 24h27m8 0h5"></svg:path></svg:g>`,
})
export class IconParkOutlineTimelineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
