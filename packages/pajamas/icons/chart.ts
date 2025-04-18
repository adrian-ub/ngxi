import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasChartIcon],svg[pajamas-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 1a.75.75 0 0 1 .75.75v9.75h9.75a.75.75 0 0 1 0 1.5H4.5v1.25a.75.75 0 0 1-1.5 0V13H1.75a.75.75 0 0 1 0-1.5H3V1.75A.75.75 0 0 1 3.75 1m9.75 4.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0zM9.75 3a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5A.75.75 0 0 1 9.75 3M7.5 7.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
