import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSurroundSoundLineIcon],svg[ri-surround-sound-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.05 4.121l1.414 1.415A4.98 4.98 0 0 0 7 12.07c0 1.38.56 2.63 1.464 3.536L7.05 17.02A6.98 6.98 0 0 1 5 12.07c0-1.933.784-3.683 2.05-4.95m9.9 0A6.98 6.98 0 0 1 19 12.07a6.98 6.98 0 0 1-2.05 4.95l-1.414-1.414A4.98 4.98 0 0 0 17 12.07c0-1.38-.56-2.63-1.464-3.535zM12 13.071a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiSurroundSoundLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
