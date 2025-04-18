import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsAlignCenterHorizontallyIcon],svg[radix-icons-align-center-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5v4.5a.5.5 0 0 0 1 0V9h5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H8V1.5a.5.5 0 0 0-1 0V6z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsAlignCenterHorizontallyIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
