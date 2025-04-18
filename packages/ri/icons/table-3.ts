import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTable3Icon],svg[ri-table-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm8 2v3H4V5zm-7 9v-4h7v4zm0 2h7v3H4zm9 0h7v3h-7zm7-2h-7v-4h7zm0-9v3h-7V5z"></svg:path>`,
})
export class RiTable3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
