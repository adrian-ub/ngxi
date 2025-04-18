import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsLoop24Icon],svg[qlementine-icons-loop-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.9 2.85a.5.5 0 0 0-.707-.707l-5 5a.5.5 0 0 0 0 .707l5 5a.5.5 0 0 0 .707-.707l-4.15-4.15h4.29c3.31 0 6 2.69 6 6s-2.69 6-6 6h-10c-3.31 0-6-2.69-6-6s2.69-6 6-6h.5a.5.5 0 0 0 0-1h-.5c-3.87 0-7 3.13-7 7s3.13 7 7 7h10c3.87 0 7-3.13 7-7s-3.13-7-7-7h-4.29l4.15-4.15z"></svg:path>`,
})
export class QlementineIconsLoop24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
