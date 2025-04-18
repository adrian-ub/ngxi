import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLadderSolidIcon],svg[streamline-ladder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0a1 1 0 0 1 1 1v1.216h5V1a1 1 0 0 1 2 0v12a1 1 0 1 1-2 0v-1.216h-5V13a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1m1 9.784h5V8h-5zm5-5.568V6h-5V4.216z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLadderSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
