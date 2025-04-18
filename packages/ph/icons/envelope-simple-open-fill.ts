import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleOpenFillIcon],svg[ph-envelope-simple-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M40 200v-88.47l65.9 47a8 8 0 0 0 4.65 1.49h34.9a8 8 0 0 0 4.65-1.49l65.9-47V200Z"></svg:path>`,
})
export class PhEnvelopeSimpleOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
