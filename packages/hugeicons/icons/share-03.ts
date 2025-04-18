import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare03Icon],svg[hugeicons-share-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.1 3c-3.65.007-5.56.096-6.782 1.318C3 5.636 3 7.757 3 12s0 6.364 1.318 7.682S7.758 21 12 21s6.364 0 7.683-1.318c1.22-1.221 1.31-3.133 1.317-6.782"></svg:path><svg:path d="m21 6.025l-1-.002c-3.737-.01-5.605-.015-6.918.93c-.437.313-.82.695-1.135 1.13C11 9.396 11 11.264 11 15m10-8.975a.7.7 0 0 0-.175-.472C20.06 4.647 18.071 3 18.071 3M21 6.025a.7.7 0 0 1-.174.422C20.06 7.353 18.07 9 18.07 9"></svg:path></svg:g>`,
})
export class HugeiconsShare03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
