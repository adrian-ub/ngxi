import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineVerticalBoldIcon],svg[ph-arrows-in-line-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M119.51 96.49a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17L140 59V16a12 12 0 0 0-24 0v43l-11.51-11.49a12 12 0 0 0-17 17Zm17 63a12 12 0 0 0-17 0l-32 32a12 12 0 0 0 17 17L116 197v43a12 12 0 0 0 24 0v-43l11.51 11.52a12 12 0 0 0 17-17Z"></svg:path>`,
})
export class PhArrowsInLineVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
