import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStackThinIcon],svg[ph-stack-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.45 174a4 4 0 0 1-1.44 5.48l-96 56a4 4 0 0 1-4 0l-96-56a4 4 0 0 1 4-6.92l94 54.83l94-54.83a4 4 0 0 1 5.44 1.44M222 124.54l-94 54.83l-94-54.83a4 4 0 0 0-4 6.92l96 56a4 4 0 0 0 4 0l96-56a4 4 0 0 0-4-6.92M28 80a4 4 0 0 1 2-3.46l96-56a4 4 0 0 1 4 0l96 56a4 4 0 0 1 0 6.92l-96 56a4 4 0 0 1-4 0l-96-56A4 4 0 0 1 28 80m11.94 0L128 131.37L216.06 80L128 28.63Z"></svg:path>`,
})
export class PhStackThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
