import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlagStraightOffIcon],svg[pepicons-pop-flag-straight-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.5 4v6h10.159l-1.197-1.71a2.25 2.25 0 0 1 0-2.58L14.659 4zm-1-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.08a1 1 0 0 0 .819-1.573L15.1 7.143a.25.25 0 0 1 0-.286l2.3-3.284A1 1 0 0 0 16.579 2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.5 3a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFlagStraightOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
