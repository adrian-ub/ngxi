import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLedStripVariantIcon],svg[mdi-led-strip-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.95 3L2 6.91l17.34 4.34l.95-3.91zm3.14 3.89l-1.93-.48l.48-1.95l1.93.48zm3.85.97L8 7.38l.5-1.96l1.92.49zm3.86.96l-1.93-.48l.48-1.95l1.92.48zm3.85.97l-1.93-.48l.48-1.96l1.93.49zM4.66 12.75l-.95 3.91L21.05 21l.95-3.9zm3.14 3.9l-1.92-.49l.47-1.95l1.93.48zm3.85.96l-1.92-.48l.47-1.95l1.93.48zm3.85.97l-1.92-.49l.48-1.95l1.94.48zm3.86.96l-1.93-.48l.48-1.95l1.93.48zM6.25 12.11L11 10.2l6.75 1.69L13 13.8z"></svg:path>`,
})
export class MdiLedStripVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
