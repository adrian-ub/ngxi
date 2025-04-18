import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAreaChartSolidIcon],svg[teenyicons-area-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0H0v15h15V2.5a.5.5 0 0 0-.907-.29L9.49 8.653L6.9 5.2a.5.5 0 0 0-.816.023L1 12.849z"></svg:path>`,
})
export class TeenyiconsAreaChartSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
