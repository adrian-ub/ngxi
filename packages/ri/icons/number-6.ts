import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNumber6Icon],svg[ri-number-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.886 2l-4.438 7.686A6.5 6.5 0 1 1 6.4 12.7L12.576 2zM12 11.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9"></svg:path>`,
})
export class RiNumber6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
