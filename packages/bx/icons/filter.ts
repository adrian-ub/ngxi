import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFilterIcon],svg[bx-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></svg:path>`,
})
export class BxFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
