import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamHourglassIcon],svg[jam-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2v4a3 3 0 1 0 6 0V2zm8 16a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2v-4a4.99 4.99 0 0 1 2-4a5 5 0 0 1-2-4V2a1 1 0 1 1 0-2h10a1 1 0 0 1 0 2v4a5 5 0 0 1-2 4a4.99 4.99 0 0 1 2 4zm-2 0v-4a3 3 0 0 0-6 0v4z"></svg:path>`,
})
export class JamHourglassIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
