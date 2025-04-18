import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoBoldIcon],svg[ph-vector-two-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 200.49l-32 32a12 12 0 0 1-17-17L195 204H80a12 12 0 0 1-12-12V69L56.49 80.49a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L92 69v111h103l-11.52-11.51a12 12 0 0 1 17-17l32 32a12 12 0 0 1 .01 17"></svg:path>`,
})
export class PhVectorTwoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
