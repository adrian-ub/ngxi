import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNavigation01Icon],svg[hugeicons-navigation-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-12 .05c-.034-1.035 4.454-3.47 4.877-2.987c.48.548-.667 2.177-.925 2.695c-.155.312-.15.448.026.76c.8 1.41 1.196 2.113.95 2.417c-.393.485-4.895-1.874-4.928-2.885M11.95 22c1.035.034 3.47-4.454 2.987-4.877c-.548-.48-2.177.666-2.695.925c-.312.155-.448.15-.76-.026c-1.41-.8-2.113-1.196-2.417-.95c-.485.393 1.874 4.895 2.885 4.928M22 12.05c.034-1.035-4.454-3.47-4.877-2.987c-.48.548.666 2.177.925 2.695c.155.312.15.448-.026.76c-.8 1.41-1.196 2.113-.95 2.417c.393.485 4.895-1.874 4.928-2.885M11.95 2c1.035-.034 3.47 4.454 2.987 4.877c-.548.48-2.177-.667-2.695-.925c-.312-.155-.448-.15-.76.026c-1.41.8-2.113 1.196-2.417.95C8.58 6.534 10.939 2.032 11.95 2" color="currentColor"></svg:path>`,
})
export class HugeiconsNavigation01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
