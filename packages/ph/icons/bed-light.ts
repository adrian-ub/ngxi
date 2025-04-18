import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBedLightIcon],svg[ph-bed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74H30V48a6 6 0 0 0-12 0v160a6 6 0 0 0 12 0v-34h212v34a6 6 0 0 0 12 0v-96a38 38 0 0 0-38-38M30 86h76v76H30Zm88 76V86h98a26 26 0 0 1 26 26v50Z"></svg:path>`,
})
export class PhBedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
