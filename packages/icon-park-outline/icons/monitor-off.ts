import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMonitorOffIcon],svg[icon-park-outline-monitor-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 12v26h26M18 10h18v17"></svg:path><svg:path d="m44 14l-8 6.75v6.5L44 34z" clip-rule="evenodd"></svg:path><svg:path d="M44 44L4 4"></svg:path></svg:g>`,
})
export class IconParkOutlineMonitorOffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
