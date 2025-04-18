import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPadlockAltOpenFIcon],svg[jam-padlock-alt-open-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.528V4a4 4 0 1 1 8 0v1a1 1 0 1 1-2 0V4a2 2 0 1 0-4 0v4.341a6 6 0 1 1-2 1.186zM6 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamPadlockAltOpenFIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
