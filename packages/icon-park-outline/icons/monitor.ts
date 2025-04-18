import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMonitorIcon],svg[icon-park-outline-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 10h32v28H4z"></svg:path><svg:path stroke-linecap="round" d="m44 14l-8 6.75v6.5L44 34z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="m17 19l6 5l-6 5"></svg:path></svg:g>`,
})
export class IconParkOutlineMonitorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
