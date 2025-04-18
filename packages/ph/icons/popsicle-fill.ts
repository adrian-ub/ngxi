import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPopsicleFillIcon],svg[ph-popsicle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 8a72.08 72.08 0 0 0-72 72v96a16 16 0 0 0 16 16h32v40a24 24 0 0 0 48 0v-40h32a16 16 0 0 0 16-16V80a72.08 72.08 0 0 0-72-72m-16 144a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0Zm24 80a8 8 0 0 1-16 0v-40h16Zm24-80a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhPopsicleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
