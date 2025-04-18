import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLineChartFilledIcon],svg[lsicon-line-chart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h1v11h11v1H2zm12.354 2.354L9.5 9.207l-2-2l-3.146 3.147l-.708-.708L7.5 5.793l2 2l4.146-4.147z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLineChartFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
