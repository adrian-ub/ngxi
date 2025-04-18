import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiStopSignIcon],svg[twemoji-stop-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD2E44" d="m12 3l-9 8.985V24l9 9h12l9-9V11.985L24 3z"></svg:path><svg:path fill="#CCD6DD" d="M24.827 1H11.173L1 11.156v13.672L11.172 35h13.657L35 24.828V11.156zM33 24l-9 9H12l-9-9V11.985L12 3h12l9 8.985z"></svg:path>`,
})
export class TwemojiStopSignIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
