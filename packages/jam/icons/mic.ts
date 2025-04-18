import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMicIcon],svg[jam-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.465 14H8a1 1 0 0 1 0-2h2v-2H8a1 1 0 1 1 0-2h2V6H8a1 1 0 1 1 0-2h1.465A4 4 0 0 0 6 2c-1.48 0-2.773.804-3.465 2H4a1 1 0 1 1 0 2H2v2h2a1 1 0 1 1 0 2H2v2h2a1 1 0 0 1 0 2H2.535A4 4 0 0 0 6 16c1.48 0 2.773-.804 3.465-2m-1.492 3.668a2 2 0 1 1-3.945 0A6 6 0 0 1 0 12V6a6 6 0 1 1 12 0v6a6 6 0 0 1-4.027 5.668"></svg:path>`,
})
export class JamMicIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
