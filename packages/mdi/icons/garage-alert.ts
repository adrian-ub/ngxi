import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGarageAlertIcon],svg[mdi-garage-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20h-2v-9H5v9H3V9l7-4l7 4zM6 12h8v2H6zm0 3h8v2H6zm13 0v-5h2v5zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiGarageAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
