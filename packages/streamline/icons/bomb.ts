import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBombIcon],svg[streamline-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 13.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M13.5.5h-.671a3 3 0 0 0-2.814 1.959L10 2.5m-6.5 5a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class StreamlineBombIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
