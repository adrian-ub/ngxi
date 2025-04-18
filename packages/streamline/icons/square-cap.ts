import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSquareCapIcon],svg[streamline-square-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.988 7H13.5m0-4.794H1.046a.546.546 0 0 0-.546.547v8.494c0 .302.245.547.546.547H13.5"></svg:path><svg:path d="M7.988 7a1.798 1.798 0 1 1-3.596 0a1.798 1.798 0 0 1 3.596 0"></svg:path></svg:g>`,
})
export class StreamlineSquareCapIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
