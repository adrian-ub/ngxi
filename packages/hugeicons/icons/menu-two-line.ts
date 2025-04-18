import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMenuTwoLineIcon],svg[hugeicons-menu-two-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 9.75h16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4c-.41 0-.75.34-.75.75s.34.75.75.75m0 6h10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4c-.41 0-.75.34-.75.75s.34.75.75.75" color="currentColor"></svg:path>`,
})
export class HugeiconsMenuTwoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
