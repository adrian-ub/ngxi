import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRippleIcon],svg[icon-park-outline-ripple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 36s5-3 10-3c7.298 0 12.702 6 20 6c5 0 10-3 10-3M4 24s5-3 10-3c7.298 0 12.702 6 20 6c5 0 10-3 10-3M4 12s5-3 10-3c7.298 0 12.702 6 20 6c5 0 10-3 10-3"></svg:path>`,
})
export class IconParkOutlineRippleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
