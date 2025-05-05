import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSlideIcon],svg[hugeicons-slide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m7 19l2.5-8.5m-5 1H9m-6 4h4.5M2 19L6 5l7.82 12.163c.577.899.865 1.348 1.313 1.592c.449.245.983.245 2.05.245H22a2.75 2.75 0 0 1-2.311-1.262L11.5 5m-4 2h5" color="currentColor"></svg:path>`,
})
export class HugeiconsSlideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
