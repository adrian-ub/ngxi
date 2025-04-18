import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsDotIcon],svg[radix-icons-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 9.125a1.625 1.625 0 1 0 0-3.25a1.625 1.625 0 0 0 0 3.25m0 1a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsDotIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
