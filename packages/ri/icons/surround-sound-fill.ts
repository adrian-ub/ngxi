import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSurroundSoundFillIcon],svg[ri-surround-sound-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.05 4.121A6.98 6.98 0 0 0 5 12.071c0 1.933.784 3.683 2.05 4.95l1.414-1.414A4.98 4.98 0 0 1 7 12.07c0-1.38.56-2.63 1.464-3.535zm9.9 0l-1.414 1.415A4.98 4.98 0 0 1 17 12.07c0 1.38-.56 2.63-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 19 12.07a6.98 6.98 0 0 0-2.05-4.95M12 15.071a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class RiSurroundSoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
