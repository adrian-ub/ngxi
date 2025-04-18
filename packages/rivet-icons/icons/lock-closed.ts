import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsLockClosedIcon],svg[rivet-icons-lock-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 10a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z"></svg:path><svg:path d="M7 0a3 3 0 0 0-3 3v2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2V3a3 3 0 0 0-3-3zm3 5H6V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm-6 9V7h8v7z"></svg:path></svg:g>`,
})
export class RivetIconsLockClosedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
