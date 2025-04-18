import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciListCheckIcon],svg[ci-list-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17h7m9-3l-4 4l-2-2M4 12h11M4 7h11"></svg:path>`,
})
export class CiListCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
