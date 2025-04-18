import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStackedScrolling1Icon],svg[carbon-stacked-scrolling-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M18 30H4a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM4 14v14h14V14z" fill="currentColor"></svg:path><svg:path d="M25 23h-2V9H9V7h14a2 2 0 0 1 2 2z" fill="currentColor"></svg:path><svg:path d="M30 16h-2V4H16V2h12a2 2 0 0 1 2 2z" fill="currentColor"></svg:path>`,
})
export class CarbonStackedScrolling1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
