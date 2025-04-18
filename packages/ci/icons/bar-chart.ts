import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciBarChartIcon],svg[ci-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21h-3V11h3v10Zm-5 0h-3V8h3v13Zm-5 0H8V5h3v16Zm-5 0H3v-8h3v8Z"></svg:path>`,
})
export class CiBarChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
