import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisToggleOnIcon],svg[uis-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 6.5h-9C4.5 6.5 2 9 2 12s2.5 5.5 5.5 5.5h9c3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5m0 8c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5S19 10.6 19 12s-1.1 2.5-2.5 2.5"></svg:path>`,
})
export class UisToggleOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
