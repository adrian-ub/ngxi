import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconCircleSlash16Icon],svg[octicon-circle-slash-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M3.965 13.096a6.5 6.5 0 0 0 9.131-9.131ZM1.5 8a6.47 6.47 0 0 0 1.404 4.035l9.131-9.131A6.499 6.499 0 0 0 1.5 8"></svg:path>`,
})
export class OcticonCircleSlash16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
