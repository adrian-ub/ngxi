import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardSquareSettingIcon],svg[hugeicons-dashboard-square-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9.357V10.5m0-1.143a2.93 2.93 0 0 1-2.427-1.272M18 9.357a2.93 2.93 0 0 0 2.427-1.272M18 3.643a2.93 2.93 0 0 1 2.427 1.272M18 3.643a2.93 2.93 0 0 0-2.427 1.272M18 3.643V2.5m3.5 1.714l-1.073.701M14.5 8.785l1.073-.7M14.5 4.215l1.073.7m5.927 3.87l-1.073-.7m0-3.17a2.8 2.8 0 0 1 0 3.17m-4.854-3.17a2.8 2.8 0 0 0 0 3.17M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093C8.1 10 7.4 10 6 10s-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093C2 8.1 2 7.4 2 6m0 12c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C3.9 14 4.6 14 6 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C10 15.9 10 16.6 10 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18m12 0c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092C15.9 14 16.6 14 18 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C22 15.9 22 16.6 22 18s0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 22 19.4 22 18 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092C14 20.1 14 19.4 14 18" color="currentColor"></svg:path>`,
})
export class HugeiconsDashboardSquareSettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
