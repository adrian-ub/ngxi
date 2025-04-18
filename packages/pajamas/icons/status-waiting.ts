import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasStatusWaitingIcon],svg[pajamas-status-waiting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2A6 6 0 1 0 6 0a6 6 0 0 0 0 12" clip-rule="evenodd"></svg:path>`,
})
export class PajamasStatusWaitingIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
