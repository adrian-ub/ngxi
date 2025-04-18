import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutSimpleLightIcon],svg[ph-arrows-out-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 48v48a6 6 0 0 1-12 0V62.48l-53.76 53.76a6 6 0 0 1-8.48-8.48L193.52 54H160a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-106.24 91.76L54 193.52V160a6 6 0 0 0-12 0v48a6 6 0 0 0 6 6h48a6 6 0 0 0 0-12H62.48l53.76-53.76a6 6 0 0 0-8.48-8.48"></svg:path>`,
})
export class PhArrowsOutSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
