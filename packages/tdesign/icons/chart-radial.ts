import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartRadialIcon],svg[tdesign-chart-radial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 9 9v-1h2v1c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1h1v2zm0 4a5 5 0 1 0 3.515 1.444l-.711-.703l1.406-1.423l.71.703A7 7 0 1 1 12 5h1v2zm0 4q-.133 0-.25.031A1 1 0 1 0 13 12v-1h2v1a3 3 0 1 1-3-3h1v2z"></svg:path>`,
})
export class TdesignChartRadialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
