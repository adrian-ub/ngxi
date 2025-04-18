import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBlazeLineIcon],svg[ri-blaze-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9q1 1.59 1 4c0 3-3.5 4-5 9q-1-.862-1-2.5c0-3.482 5-5.29 5-10.5m-4.5-4a8.3 8.3 0 0 1 1 4c0 5-6 6-4 13Q9 20.26 9 17c0-3.325 5.5-6 5.5-12M10 1q1 2 1 4.5c0 6-9 7.5-3 16.5c-2.5-.5-4.5-3-4.5-6C3.5 9.5 10 8.5 10 1"></svg:path>`,
})
export class RiBlazeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
