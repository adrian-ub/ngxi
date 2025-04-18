import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketUkIcon],svg[mdi-power-socket-uk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 2h16v16H4zm7 3v4h2V7zm-5 7.75V17h3.5v-2.25zm8.5 0V17H18v-2.25z"></svg:path>`,
})
export class MdiPowerSocketUkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
