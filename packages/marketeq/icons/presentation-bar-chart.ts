import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPresentationBarChartIcon],svg[marketeq-presentation-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 25v-6.25M25 33.333V43.75zm2.083 10.417h-4.166zM25 25V14.583zm8.333 0v-6.25z"></svg:path><svg:path stroke="#306CFE" d="M6.25 6.25h37.5m-35.417 0h33.334v25a2.083 2.083 0 0 1-2.084 2.083H10.417a2.083 2.083 0 0 1-2.084-2.083z"></svg:path></svg:g>`,
})
export class MarketeqPresentationBarChartIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
