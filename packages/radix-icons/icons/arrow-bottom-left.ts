import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsArrowBottomLeftIcon],svg[radix-icons-arrow-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.354 3.646a.5.5 0 0 1 0 .708L4.707 11H9a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 1 0v4.293l6.646-6.647a.5.5 0 0 1 .708 0" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsArrowBottomLeftIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
