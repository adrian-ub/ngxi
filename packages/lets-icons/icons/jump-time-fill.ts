import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsJumpTimeFillIcon],svg[lets-icons-jump-time-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m17.344 8.075l-4.464 8.29a1 1 0 0 1-1.76 0l-4.464-8.29c-.477-.885.504-1.84 1.376-1.342l3.472 1.983a1 1 0 0 0 .992 0l3.471-1.983c.873-.499 1.854.457 1.377 1.342"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4 19h5m6 0h5"></svg:path></svg:g>`,
})
export class LetsIconsJumpTimeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
