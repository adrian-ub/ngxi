import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMonitorIcon],svg[icon-park-twotone-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMonitor0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M4 10h32v28H4z"></svg:path><svg:path stroke-linecap="round" d="m44 14l-8 6.75v6.5L44 34z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="m17 19l6 5l-6 5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMonitor0)"></svg:path>`,
})
export class IconParkTwotoneMonitorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
