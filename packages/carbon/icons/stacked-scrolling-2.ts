import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStackedScrolling2Icon],svg[carbon-stacked-scrolling-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8 30H2a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM2 14v14h6V14z" fill="currentColor"></svg:path><svg:path d="M20 30h-6a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zm-6-16v14h6V14z" fill="currentColor"></svg:path><svg:path d="M27 21h-2V9h-8V7h8a2 2 0 0 1 2 2z" fill="currentColor"></svg:path><svg:path d="M32 16h-2V4h-8V2h8a2 2 0 0 1 2 2z" fill="currentColor"></svg:path>`,
})
export class CarbonStackedScrolling2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
