import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChartPieIcon],svg[stash-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.065 3.761a.75.75 0 0 1 .53-.22a7.01 7.01 0 0 1 7.01 7.01a.75.75 0 0 1-.75.75h-6.26a.75.75 0 0 1-.75-.75v-6.26a.75.75 0 0 1 .22-.53m1.28 6.04h4.71a5.51 5.51 0 0 0-4.71-4.708z"></svg:path><svg:path fill="currentColor" d="M3.84 15.966A7.75 7.75 0 0 1 11 5.25a.75.75 0 0 1 .75.75v6.69l4.73 4.73a.75.75 0 0 1 0 1.06a7.75 7.75 0 0 1-12.64-2.514m.94-3.579a6.25 6.25 0 0 0 10.077 5.53L10.47 13.53a.75.75 0 0 1-.22-.53V6.795a6.25 6.25 0 0 0-5.47 5.592m15.553 2.91a5.7 5.7 0 0 1-1.227 1.836l-4.002-4.002h5.66a5.7 5.7 0 0 1-.431 2.166"></svg:path>`,
})
export class StashChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
