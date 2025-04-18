import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutLineVerticalBoldIcon],svg[ph-arrows-out-line-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M104.49 56.48L116 45v43a12 12 0 0 0 24 0V45l11.51 11.51a12 12 0 0 0 17-17l-32-32a12 12 0 0 0-17 0l-32 32a12 12 0 0 0 17 17Zm47 143L140 211v-43a12 12 0 0 0-24 0v43l-11.51-11.52a12 12 0 0 0-17 17l32 32a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17"></svg:path>`,
})
export class PhArrowsOutLineVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
