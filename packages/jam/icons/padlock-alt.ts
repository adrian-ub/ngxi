import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPadlockAltIcon],svg[jam-padlock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8M2 9.528V4a4 4 0 1 1 8 0v5.528a6 6 0 1 1-8 0M4 8.34A6 6 0 0 1 6 8c.701 0 1.374.12 2 .341V4a2 2 0 1 0-4 0v4.341zM6 16a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamPadlockAltIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
