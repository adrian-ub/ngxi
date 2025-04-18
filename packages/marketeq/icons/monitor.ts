import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMonitorIcon],svg[marketeq-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m33.333 41.667l-2.083-8.334h-12.5l-2.083 8.334z"></svg:path><svg:path stroke="#306CFE" d="M12.5 41.667h25zm29.167-8.334H8.333A2.083 2.083 0 0 1 6.25 31.25V10.417a2.083 2.083 0 0 1 2.083-2.084h33.334a2.083 2.083 0 0 1 2.083 2.084V31.25a2.083 2.083 0 0 1-2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqMonitorIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
