import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCompactDiscIcon],svg[la-compact-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-2.781 2.5A8.04 8.04 0 0 0 8.5 13.219l1.875.687a6.02 6.02 0 0 1 3.531-3.531zM16 13c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m5.625 3.094a6.02 6.02 0 0 1-3.531 3.531l.687 1.875a8.04 8.04 0 0 0 4.719-4.719z"></svg:path>`,
})
export class LaCompactDiscIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
