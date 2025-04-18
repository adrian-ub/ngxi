import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpWatchOffIcon],svg[ic-sharp-watch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5c0 .64-.13 1.25-.35 1.82l1.5 1.5a6.96 6.96 0 0 0-1.79-8.79L15 2H9l-.96 3.21l2.14 2.14C10.75 7.13 11.36 7 12 7M2.81 2.81L1.39 4.22l4.46 4.46a6.96 6.96 0 0 0 1.79 8.79L9 22h6l.96-3.21l3.82 3.82l1.41-1.41zM12 17c-2.76 0-5-2.24-5-5c0-.64.13-1.25.35-1.82l6.47 6.47c-.57.22-1.18.35-1.82.35"></svg:path>`,
})
export class IcSharpWatchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
