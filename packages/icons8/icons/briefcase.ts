import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8BriefcaseIcon],svg[icons8-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-1.864 0-3.4 1.275-3.844 3H3v20h26V6h-9.156C19.4 4.275 17.864 3 16 3m0 2c.81 0 1.428.385 1.75 1h-3.5c.322-.615.94-1 1.75-1M5 8h22v9H5zm11 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2M5 19h22v5H5z"></svg:path>`,
})
export class Icons8BriefcaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
