import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiBeer11Icon],svg[maki-beer-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.5 1c-2.3 0-3 .66-3 .66v2a6.6 6.6 0 0 0 .66 2.65a4.13 4.13 0 0 1 0 3s0 .66 2.32.66s2.32-.66 2.32-.66a4.13 4.13 0 0 1 0-3a6.6 6.6 0 0 0 .66-2.65v-2S7.8 1 5.5 1zm0 8.28a4.77 4.77 0 0 1-1.56-.18c.133-.479.2-.973.2-1.47h2.72c-.014.22-.014.44 0 .66c.034.274.087.544.16.81a4.77 4.77 0 0 1-1.52.19v-.01zm2.32-6a8.24 8.24 0 0 1-4.63 0L3.18 2a8.28 8.28 0 0 1 4.64 0s.03 1.33 0 1.33v-.05z" fill="currentColor"></svg:path>`,
})
export class MakiBeer11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
