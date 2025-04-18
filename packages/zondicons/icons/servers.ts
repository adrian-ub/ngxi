import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsServersIcon],svg[zondicons-servers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm0 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm0 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zM12 2v2h2V2zm4 0v2h2V2zm-4 7v2h2V9zm4 0v2h2V9zm-4 7v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class ZondiconsServersIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
