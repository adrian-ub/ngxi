import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAngleFillIcon],svg[ph-angle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M112 88a64.07 64.07 0 0 1 64 64a8 8 0 0 1-16 0a48.05 48.05 0 0 0-48-48a8 8 0 0 1 0-16m88 104H80a8 8 0 0 1-8-8v-80H56a8 8 0 0 1 0-16h16V72a8 8 0 0 1 16 0v104h112a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhAngleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
