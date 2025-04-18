import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreadsEllipseIcon],svg[hugeicons-threads-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M17 9.59c-1.088-4.047-4.828-3.794-4.828-3.794S7 5.452 7 12s5.172 6.204 5.172 6.204s3.075.204 4.483-2.702c.46-1.281.345-3.844-4.138-3.844c0 0-2.069 0-2.069 1.725c0 .673.69 1.379 1.724 1.379a2.45 2.45 0 0 0 2.414-2.07c.69-4.137-3.103-4.482-4.138-2.758"></svg:path></svg:g>`,
})
export class HugeiconsThreadsEllipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
