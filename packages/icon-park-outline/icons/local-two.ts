import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLocalTwoIcon],svg[icon-park-outline-local-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44s15-12 15-25c0-8.284-6.716-15-15-15S9 10.716 9 19c0 13 15 25 15 25Z"></svg:path><svg:path d="M24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path></svg:g>`,
})
export class IconParkOutlineLocalTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
