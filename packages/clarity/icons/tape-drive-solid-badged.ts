import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTapeDriveSolidBadgedIcon],svg[clarity-tape-drive-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.21 23a5 5 0 1 0-5-5a5 5 0 0 0 5 5m0-7a2 2 0 1 1-2 2a2 2 0 0 1 2-2m11.58 7a5 5 0 1 0-5-5a5 5 0 0 0 5 5m0-7a2 2 0 1 1-2 2a2 2 0 0 1 2-2"></svg:path><svg:path fill="currentColor" d="M30 13.5V24H6V12h19.51a7.49 7.49 0 0 1-3-6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.5 7.5 0 0 1-4 1.16"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor"></svg:circle>`,
})
export class ClarityTapeDriveSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
