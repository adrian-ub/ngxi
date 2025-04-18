import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsXIcon],svg[lineicons-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.751 2.96h3.067l-6.7 7.659L22 21.039h-6.172l-4.833-6.32l-5.531 6.32h-3.07l7.167-8.19L2 2.96h6.328l4.37 5.777zm-1.076 16.243h1.7L7.404 4.7H5.58z"></svg:path>`,
})
export class LineiconsXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
