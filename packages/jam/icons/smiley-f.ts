import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSmileyFIcon],svg[jam-smiley-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20.858c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-3.92-6.606a4.264 4.264 0 0 0 7.84 0a1 1 0 1 0-1.84-.788a2.264 2.264 0 0 1-4.16 0a1 1 0 1 0-1.84.788M7 6.858a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamSmileyFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
