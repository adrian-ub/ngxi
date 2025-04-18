import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChromeIcon],svg[streamline-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.86 7.047a6.187 6.187 0 1 0 12.374 0a6.187 6.187 0 1 0-12.374 0m6.187-2.432h5.691"></svg:path><svg:path d="M4.615 7.046a2.431 2.431 0 1 0 4.862 0a2.431 2.431 0 1 0-4.862 0m.318 1.218L2.087 3.335m7.061 4.924l-2.846 4.929"></svg:path></svg:g>`,
})
export class StreamlineChromeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
