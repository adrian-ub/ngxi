import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardCircleSettingsIcon],svg[hugeicons-dashboard-circle-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="6.25" cy="6.25" r="4.25"></svg:circle><svg:path d="M18 9.357V10.5m0-1.143a2.93 2.93 0 0 1-2.427-1.272M18 9.357a2.93 2.93 0 0 0 2.427-1.272M18 3.643a2.93 2.93 0 0 1 2.427 1.272M18 3.643a2.93 2.93 0 0 0-2.427 1.272M18 3.643V2.5m3.5 1.714l-1.073.701M14.5 8.785l1.073-.7M14.5 4.215l1.073.7m5.927 3.87l-1.073-.7m0-3.17a2.8 2.8 0 0 1 0 3.17m-4.854-3.17a2.8 2.8 0 0 0 0 3.17"></svg:path><svg:circle cx="17.75" cy="17.75" r="4.25"></svg:circle><svg:circle cx="6.25" cy="17.75" r="4.25"></svg:circle></svg:g>`,
})
export class HugeiconsDashboardCircleSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
