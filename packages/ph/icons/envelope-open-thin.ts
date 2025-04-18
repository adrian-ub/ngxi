import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeOpenThinIcon],svg[ph-envelope-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.22 92.67l-96-64a4 4 0 0 0-4.44 0l-96 64A4 4 0 0 0 28 96v104a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V96a4 4 0 0 0-1.78-3.33M103.63 152L36 199.76v-96Zm8.19 4h32.36l68 48H43.86Zm40.55-4L220 103.76v96ZM128 36.81l89 59.3L144.17 148h-32.34L39.05 96.11Z"></svg:path>`,
})
export class PhEnvelopeOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
