import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasStatusCancelledIcon],svg[pajamas-status-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12M4.28 3.22a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasStatusCancelledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
