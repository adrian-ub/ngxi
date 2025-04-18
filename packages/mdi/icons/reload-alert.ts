import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiReloadAlertIcon],svg[mdi-reload-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5 4 9 9 9c2.4 0 4.7-.9 6.4-2.6l-1.5-1.5c-1.3 1.4-3 2.1-4.9 2.1c-6.2 0-9.4-7.5-4.9-11.9S18 5.8 18 12h-3l4 4h.1l3.9-4h-3c0-5-4-9-9-9s-9 4-9 9m8 3h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiReloadAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
