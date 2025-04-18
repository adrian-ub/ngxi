import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLightIcon],svg[ph-map-pin-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 72a54 54 0 1 0-60 53.66V232a6 6 0 0 0 12 0V125.66A54.07 54.07 0 0 0 182 72m-54 42a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhMapPinSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
