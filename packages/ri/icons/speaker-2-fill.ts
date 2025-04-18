import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSpeaker2FillIcon],svg[ri-speaker-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 14a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0 2a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiSpeaker2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
