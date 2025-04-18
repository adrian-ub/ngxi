import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTwitchIcon],svg[jam-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1.25 0L0 3.75V17.5h5V20h2.5l2.5-2.5h3.75l5-5.325V0zM17.5 11.25L14 15H9.568l-2.693 1.959V15H2.5V1.25h15z"></svg:path><svg:path d="M8.75 5H10v5H8.75zm3.75 0h1.25v5H12.5z"></svg:path></svg:g>`,
})
export class JamTwitchIcon {
  readonly viewBox = input("-2.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
