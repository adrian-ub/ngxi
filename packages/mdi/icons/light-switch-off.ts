import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightSwitchOffIcon],svg[mdi-light-switch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.4 1.6C19 1.2 18.5 1 18 1H6c-.5 0-1 .2-1.4.6S4 2.5 4 3v18c0 .5.2 1 .6 1.4s.9.6 1.4.6h12c.5 0 1-.2 1.4-.6s.6-.9.6-1.4V3c0-.5-.2-1-.6-1.4M18 21H6V3h12zM8 6v12h8V6zm7 11H9V7h6zm-5-3h4v2h-4z"></svg:path>`,
})
export class MdiLightSwitchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
