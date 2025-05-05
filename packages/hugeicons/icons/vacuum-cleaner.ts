import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVacuumCleanerIcon],svg[hugeicons-vacuum-cleaner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 21a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path><svg:path d="M10 21h1.974c.64 0 1.124-.565 1.01-1.179l-.914-4.9C11.538 12.07 8.994 10 6.024 10C5.458 10 5 10.447 5 10.999V14.5"></svg:path><svg:path d="M19.5 21L12.858 6.934A6.87 6.87 0 0 0 6.649 3A4.65 4.65 0 0 0 2 7.65v.188A4.39 4.39 0 0 0 5 12m17 9h-5.5"></svg:path></svg:g>`,
})
export class HugeiconsVacuumCleanerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
