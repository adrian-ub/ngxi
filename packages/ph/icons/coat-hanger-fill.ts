import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCoatHangerFillIcon],svg[ph-coat-hanger-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.57 171.2L141.33 96l23.46-17.6A8 8 0 0 0 168 72a40 40 0 1 0-80 0a8 8 0 0 0 16 0a24 24 0 0 1 47.69-3.78L14.43 171.2A16 16 0 0 0 24 200h208a16 16 0 0 0 9.6-28.8ZM32.73 184c20.87-13.41 56.76-32 95.27-32s74.4 18.59 95.27 32Z"></svg:path>`,
})
export class PhCoatHangerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
