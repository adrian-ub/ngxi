import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconDot24Icon],svg[octicon-dot-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-1.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path>`,
})
export class OcticonDot24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
