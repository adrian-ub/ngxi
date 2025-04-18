import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCaretDownIcon],svg[mage-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.777 15.628l6.094-6.769A.518.518 0 0 0 18.488 8H5.512a.519.519 0 0 0-.383.86l6.094 6.81a1.037 1.037 0 0 0 1.554-.042"></svg:path>`,
})
export class MageCaretDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
