import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutCardinalBoldIcon],svg[ph-arrows-out-cardinal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M87.51 64.49a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L140 53v43a12 12 0 0 1-24 0V53l-11.51 11.49a12 12 0 0 1-16.98 0m64 127L140 203v-43a12 12 0 0 0-24 0v43l-11.51-11.52a12 12 0 0 0-17 17l32 32a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17Zm89-72l-32-32a12 12 0 0 0-17 17L203 116h-43a12 12 0 0 0 0 24h43l-11.52 11.51a12 12 0 0 0 17 17l32-32a12 12 0 0 0 .01-17ZM53 140h43a12 12 0 0 0 0-24H53l11.52-11.51a12 12 0 1 0-17-17l-32 32a12 12 0 0 0 0 17l32 32a12 12 0 1 0 17-17Z"></svg:path>`,
})
export class PhArrowsOutCardinalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
