import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamFirstAidIcon],svg[jam-first-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm2-2V3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm2 0h6V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1zm2 4h2v6H9zm-2 2h6v2H7z"></svg:path>`,
})
export class JamFirstAidIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
