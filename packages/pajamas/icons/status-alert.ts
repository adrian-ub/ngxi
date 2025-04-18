import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasStatusAlertIcon],svg[pajamas-status-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0M5 3a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0zm1 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class PajamasStatusAlertIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
