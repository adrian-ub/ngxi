import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTreadmill02Icon],svg[hugeicons-treadmill-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.868 19H3.32C2.59 19 2 18.397 2 17.653c0-.556.334-1.055.841-1.256L15.6 11.33c3.08-1.222 6.4 1.098 6.4 4.47c0 1.769-1.402 3.2-3.132 3.2M18 15h.009M6 15L4 9m1 0H2"></svg:path><svg:path d="m17 11l2-6c1.592 0 2.606-.423 3-2M6 19l-1 2m13-2v2"></svg:path></svg:g>`,
})
export class HugeiconsTreadmill02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
