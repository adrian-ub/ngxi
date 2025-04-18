import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiEarthIcon],svg[mynaui-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M13 3.048a5 5 0 0 0 .982 8.3c2.018 1.013 2.789-.352 3.881.384c.71.478.897 1.44.42 2.149c-.501.742-1.283 1.119-1.148 2.336c.077.687.499 1.278 1.045 1.783M4 9.28a4.98 4.98 0 0 1 2.806 1.846a4.98 4.98 0 0 1 .992 3.424c-.052.626.356 1.258.881 1.603A2.71 2.71 0 0 1 9 20.44"></svg:path></svg:g>`,
})
export class MynauiEarthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
