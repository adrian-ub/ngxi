import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamAlertFIcon],svg[jam-alert-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20.393c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.478 10 10s-4.477 10-10 10m0-15a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m0 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamAlertFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
