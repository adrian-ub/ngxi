import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonArrowUpIcon],svg[si-glyph-button-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.984.057c4.389 0 7.959 3.562 7.959 7.941c0 4.377-3.57 7.939-7.959 7.939s-7.959-3.562-7.959-7.939c0-4.379 3.571-7.941 7.959-7.941m-.015 14.026c3.347 0 6.074-2.729 6.074-6.083s-2.727-6.083-6.074-6.083C5.62 1.917 2.896 4.647 2.896 8s2.724 6.083 6.073 6.083"></svg:path><svg:path d="M11.975 7.906L8.973 4.002L6.022 7.907h2.003v3.264c0 .344.324.79.955.79c.63 0 .975-.483.975-.826V7.906z"></svg:path></svg:g>`,
})
export class SiGlyphButtonArrowUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
