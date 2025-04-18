import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFlakyIcon],svg[ic-sharp-flaky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.05 17.58l-.01.01l-2.4-2.4l1.06-1.06l1.35 1.35L16.54 13l1.06 1.06l-3.54 3.54zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M7.34 6.28l1.41 1.41l1.41-1.41l1.06 1.06l-1.41 1.41l1.41 1.41l-1.06 1.06l-1.41-1.41l-1.41 1.41l-1.06-1.06l1.41-1.41l-1.41-1.41zM12 20c-2.2 0-4.2-.9-5.7-2.3L17.7 6.3C19.1 7.8 20 9.8 20 12c0 4.4-3.6 8-8 8"></svg:path>`,
})
export class IcSharpFlakyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
