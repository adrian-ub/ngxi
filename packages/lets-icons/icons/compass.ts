import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassIcon],svg[lets-icons-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M9.942 10.687a37 37 0 0 1-.008-2.265c.595.324 1.3.725 1.958 1.14c.48.302.918.602 1.26.876c.37.295.537.487.58.562s.127.315.197.783c.066.434.106.962.129 1.53c.03.776.024 1.588.008 2.265a36 36 0 0 1-1.958-1.14c-.48-.303-.917-.603-1.26-.876c-.37-.295-.537-.487-.58-.562s-.126-.315-.197-.783a15 15 0 0 1-.129-1.53Z"></svg:path><svg:circle cx="12" cy="12" r="9"></svg:circle></svg:g>`,
})
export class LetsIconsCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
