import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChartLineSolidIcon],svg[mynaui-chart-line-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.805 5.544a1.25 1.25 0 0 0-1.761.15l-6.928 8.227l-3.076-4.614a1.25 1.25 0 0 0-1.958-.155l-6 6.5a1.25 1.25 0 1 0 1.837 1.696l4.922-5.333l3.119 4.678a1.25 1.25 0 0 0 1.996.112l8-9.5a1.25 1.25 0 0 0-.15-1.761"></svg:path>`,
})
export class MynauiChartLineSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
