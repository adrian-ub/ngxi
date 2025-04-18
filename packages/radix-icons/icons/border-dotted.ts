import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsBorderDottedIcon],svg[radix-icons-border-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 6.625a.875.875 0 1 0 0 1.75a.875.875 0 0 0 0-1.75m4 0a.875.875 0 1 0 0 1.75a.875.875 0 0 0 0-1.75m4 0a.875.875 0 1 0 0 1.75a.875.875 0 0 0 0-1.75m3.125.875a.875.875 0 1 1 1.75 0a.875.875 0 0 1-1.75 0" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsBorderDottedIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
