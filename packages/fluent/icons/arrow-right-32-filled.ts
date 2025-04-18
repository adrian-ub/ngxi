import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRight32FilledIcon],svg[fluent-arrow-right-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16c0-.69.56-1.25 1.25-1.25h20.537l-7.432-7.628a1.25 1.25 0 1 1 1.79-1.744l9.497 9.747a1.246 1.246 0 0 1 0 1.75l-9.497 9.747a1.25 1.25 0 1 1-1.79-1.744l7.432-7.628H4.25C3.56 17.25 3 16.69 3 16"></svg:path>`,
})
export class FluentArrowRight32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
