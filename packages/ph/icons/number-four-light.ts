import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberFourLightIcon],svg[ph-number-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 162h-18V48a6 6 0 0 0-10.69-3.75l-96 120A6 6 0 0 0 64 174h90v34a6 6 0 0 0 12 0v-34h18a6 6 0 0 0 0-12m-30 0H76.48L154 65.1Z"></svg:path>`,
})
export class PhNumberFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
