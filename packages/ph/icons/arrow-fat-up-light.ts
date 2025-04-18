import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatUpLightIcon],svg[ph-arrow-fat-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 115.76l-96-96a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 32 126h42v82a14 14 0 0 0 14 14h80a14 14 0 0 0 14-14v-82h42a6 6 0 0 0 4.24-10.24M176 114a6 6 0 0 0-6 6v88a2 2 0 0 1-2 2H88a2 2 0 0 1-2-2v-88a6 6 0 0 0-6-6H46.49L128 32.49L209.51 114Z"></svg:path>`,
})
export class PhArrowFatUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
