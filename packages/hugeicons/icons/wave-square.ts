import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaveSquareIcon],svg[hugeicons-wave-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M3 12h4a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5a1 1 0 0 1 1-1h4" color="currentColor"></svg:path>`,
})
export class HugeiconsWaveSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
