import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBandAidIcon],svg[gg-band-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.939 9.765a1 1 0 1 1-1.813-.845a1 1 0 0 1 1.813.845M8.92 13.874a1 1 0 1 0 .845-1.813a1 1 0 0 0-.846 1.813m4.955 1.206a1 1 0 1 1-1.813-.845a1 1 0 0 1 1.813.846m.361-3.142a1 1 0 1 0 .845-1.813a1 1 0 0 0-.845 1.813"></svg:path><svg:path fill-rule="evenodd" d="M17.071 1.124a6 6 0 0 0-7.973 2.902L4.026 14.902a6 6 0 0 0 10.876 5.072l5.072-10.876a6 6 0 0 0-2.903-7.974m-3.136 16.192l3.38-7.25l-7.25-3.382l-3.38 7.25zm-.846 1.812l-7.25-3.38a4 4 0 1 0 7.25 3.38m3.137-16.191a4 4 0 0 1 1.935 5.316l-7.25-3.381a4 4 0 0 1 5.315-1.935" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBandAidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
