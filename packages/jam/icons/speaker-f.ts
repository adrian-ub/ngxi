import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSpeakerFIcon],svg[jam-speaker-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m4 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8M7 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamSpeakerFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
