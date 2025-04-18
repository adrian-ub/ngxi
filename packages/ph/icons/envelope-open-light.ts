import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeOpenLightIcon],svg[ph-envelope-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.33 91l-96-64a6 6 0 0 0-6.66 0l-96 64A6 6 0 0 0 26 96v104a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V96a6 6 0 0 0-2.67-5m-127.15 61L38 195.9v-88.25Zm12.27 6h31.1l62.29 44H50.16Zm43.37-6L218 107.65v88.25ZM128 39.21l85.43 57l-69.9 49.79h-31.06l-69.9-49.83Z"></svg:path>`,
})
export class PhEnvelopeOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
