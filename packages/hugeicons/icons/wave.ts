import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaveIcon],svg[hugeicons-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M3 12h3a2 2 0 0 0 2-2V7a2 2 0 1 1 4 0v10a2 2 0 1 0 4 0v-3a2 2 0 0 1 2-2h3" color="currentColor"></svg:path>`,
})
export class HugeiconsWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
