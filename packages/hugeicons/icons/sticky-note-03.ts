import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStickyNote03Icon],svg[hugeicons-sticky-note-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 21.75h1.34c.89 0 1.38 0 1.89-.21c.49-.2.84-.55 1.47-1.18l4.66-4.66c.63-.63.97-.98 1.18-1.48s.21-.99.21-1.88V11c0-3.98 0-5.97-1.39-7.36S16.98 2.25 13 2.25h-2c-3.98 0-5.97 0-7.36 1.39S2.25 7.02 2.25 11v2c0 3.98 0 5.97 1.39 7.36s3.38 1.39 7.36 1.39m0-18h2c3.56 0 5.35 0 6.3.95s.95 2.74.95 6.3v1.341c0 .416 0 .7-.014.909H20c-3.03 0-4.55 0-5.65 1.1s-1.1 2.62-1.1 5.65v.236c-.21.014-.495.014-.91.014H11c-3.56 0-5.35 0-6.3-.95s-.95-2.74-.95-6.3v-2c0-3.56 0-5.35.95-6.3s2.74-.95 6.3-.95m3.75 15.44l4.439-4.44c-2.087.008-3.19.072-3.779.66c-.588.588-.652 1.692-.66 3.78" color="currentColor"></svg:path>`,
})
export class HugeiconsStickyNote03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
