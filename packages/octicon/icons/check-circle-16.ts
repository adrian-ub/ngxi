import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconCheckCircle16Icon],svg[octicon-check-circle-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m1.5 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m10.28-1.72l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 .018-1.042a.75.75 0 0 1 1.042-.018l1.47 1.47l3.97-3.97a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042"></svg:path>`,
})
export class OcticonCheckCircle16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
