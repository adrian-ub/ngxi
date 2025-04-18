import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmokeDetectorIcon],svg[streamline-smoke-detector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.58 7.5c-2 2.5 2 3.5 0 6M7 7.5c-2 2.5 2 3.5 0 6m3.42-6c-2 2.5 2 3.5 0 6M2.5.5h9m-8 0V1a3.5 3.5 0 1 0 7 0V.5"></svg:path>`,
})
export class StreamlineSmokeDetectorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
