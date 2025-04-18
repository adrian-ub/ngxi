import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTapeDriveOutlineBadgedIcon],svg[clarity-tape-drive-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.81 17.87a4.53 4.53 0 1 0 4.52-4.52a4.53 4.53 0 0 0-4.52 4.52m7.45 0A2.93 2.93 0 1 1 13.33 15a2.93 2.93 0 0 1 2.93 2.87m2.84 0a4.52 4.52 0 1 0 4.52-4.52a4.53 4.53 0 0 0-4.52 4.52m7.44 0A2.92 2.92 0 1 1 23.62 15a2.92 2.92 0 0 1 2.92 2.87"></svg:path><svg:path fill="currentColor" d="M32 13.22V28H4V8h18.78a7.4 7.4 0 0 1-.28-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.7 7.7 0 0 1-2 .88"></svg:path><svg:path fill="currentColor" d="M6 11v12.55h2V12h17.51a7.7 7.7 0 0 1-1.85-2H7a1 1 0 0 0-1 1"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor"></svg:circle>`,
})
export class ClarityTapeDriveOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
