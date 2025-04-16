import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsJustifyCenterIcon],svg[radix-icons-justify-center-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M7.95 6H11v3H7.95V6zm0-1V1.5a.45.45 0 0 0-.9 0V5h-3.3a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h3.3v3.5a.45.45 0 1 0 .9 0V10h3.3a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75h-3.3zm-.9 4H4V6h3.05v3z" fill="currentColor"></svg:path></svg:g>`,
})
export class RadixIconsJustifyCenterIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
