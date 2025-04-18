import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosInferIcon],svg[logos-infer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7D29E4" d="M256 128c0 70.693-57.308 128-128 128S0 198.692 0 128S57.308 0 128 0s128 57.308 128 128"></svg:path><svg:path fill="#FFF" d="M169.888 125.664h-50.092V63.24c0-2.881-1.413-5.217-5.216-5.217c-3.612 0-5.215 2.336-5.215 5.216v130.608c0 2.88 1.413 5.216 5.216 5.216c3.612 0 5.215-2.335 5.215-5.216v-57.752h50.092c2.88 0 5.215-1.412 5.215-5.215c0-3.614-2.335-5.216-5.215-5.216"></svg:path>`,
})
export class LogosInferIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
