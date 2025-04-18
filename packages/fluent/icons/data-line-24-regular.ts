import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataLine24RegularIcon],svg[fluent-data-line-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M16 6a3 3 0 1 1 2.525 2.963l-2.038 3.358a3 3 0 0 1-4.75 3.65l-3.741 1.87Q8 17.919 8 18a3 3 0 1 1-.465-1.606l3.531-1.765a3 3 0 0 1 4.276-3.313l1.798-2.962A3 3 0 0 1 16 6m-2 6.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-9 4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class FluentDataLine24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
