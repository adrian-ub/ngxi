import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsAlignRightIcon],svg[radix-icons-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5V6H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h11v4.5a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsAlignRightIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
