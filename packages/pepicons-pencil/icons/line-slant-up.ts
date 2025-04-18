import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineSlantUpIcon],svg[pepicons-pencil-line-slant-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.454 19.546a.5.5 0 0 1 0-.707L18.839.454a.5.5 0 1 1 .707.707L1.16 19.546a.5.5 0 0 1-.707 0" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilLineSlantUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
