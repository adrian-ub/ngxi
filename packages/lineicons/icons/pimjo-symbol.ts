import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPimjoSymbolIcon],svg[lineicons-pimjo-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7.504 7.504 0 0 0-7.51 7.508V22l4.65-5.542a7.506 7.506 0 0 0 10.367-6.95A7.5 7.5 0 0 0 11.999 2m0 11.05a3.544 3.544 0 0 1-3.542-3.542a3.54 3.54 0 0 1 3.541-3.541a3.54 3.54 0 0 1 3.542 3.541A3.54 3.54 0 0 1 12 13.05"></svg:path>`,
})
export class LineiconsPimjoSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
