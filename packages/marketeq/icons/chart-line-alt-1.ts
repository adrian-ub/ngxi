import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqChartLineAlt1Icon],svg[marketeq-chart-line-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M14.583 33.333L25 22.917l8.333 6.25l7.396-14.813"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M41.563 12.5h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M6.25 6.25v37.5h37.5"></svg:path></svg:g>`,
})
export class MarketeqChartLineAlt1Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
