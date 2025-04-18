import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotonePieChartIcon],svg[ic-twotone-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12c0 4.07 3.06 7.44 7 7.93V4.07C7.06 4.56 4 7.93 4 12m9 7.93A8 8 0 0 0 19.93 13H13zm0-15.86V11h6.93A8 8 0 0 0 13 4.07" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.94-.49-7-3.86-7-7.93s3.06-7.44 7-7.93zm2 0V13h6.93A8 8 0 0 1 13 19.93M13 11V4.07c3.61.45 6.48 3.32 6.93 6.93z"></svg:path>`,
})
export class IcTwotonePieChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
