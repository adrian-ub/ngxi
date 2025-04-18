import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsCropIcon],svg[radix-icons-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V3h7.5a.5.5 0 0 1 .5.5V11h2.5a.5.5 0 1 1 0 1H12v2.5a.5.5 0 0 1-1 0V12H3.5a.5.5 0 0 1-.5-.5V4H.5a.5.5 0 1 1 0-1H3V.5a.5.5 0 0 1 .5-.5M4 4v7h7V4z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsCropIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
