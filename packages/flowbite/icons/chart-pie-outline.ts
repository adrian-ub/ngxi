import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteChartPieOutlineIcon],svg[flowbite-chart-pie-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10z"></svg:path><svg:path d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3"></svg:path></svg:g>`,
})
export class FlowbiteChartPieOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
