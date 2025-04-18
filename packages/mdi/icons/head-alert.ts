import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHeadAlertIcon],svg[mdi-head-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.2 3 6.2 5.9 6 9.7l-1.9 2.5c-.2.3 0 .8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.7c2.4-1.1 4-3.5 4-6.3c0-3.9-3.1-7-7-7m1 12h-2v-2h2v1m0-3h-2V5h2z"></svg:path>`,
})
export class MdiHeadAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
