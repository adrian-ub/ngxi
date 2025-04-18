import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamHourglassFIcon],svg[jam-hourglass-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2v-4a4.99 4.99 0 0 1 2-4a5 5 0 0 1-2-4V2a1 1 0 1 1 0-2h10a1 1 0 0 1 0 2v4a5 5 0 0 1-2 4a4.99 4.99 0 0 1 2 4z"></svg:path>`,
})
export class JamHourglassFIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
