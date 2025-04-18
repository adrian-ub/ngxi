import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeOpenBoldIcon],svg[ph-envelope-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m230.66 86l-96-64a12 12 0 0 0-13.32 0l-96 64A12 12 0 0 0 20 96v104a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V96a12 12 0 0 0-5.34-10M89.81 152L44 184.31v-65Zm24.55 12h27.28L187 196H69.05Zm51.83-12L212 119.29v65ZM128 46.42l74.86 49.91L141.61 140h-27.22L53.14 96.33Z"></svg:path>`,
})
export class PhEnvelopeOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
