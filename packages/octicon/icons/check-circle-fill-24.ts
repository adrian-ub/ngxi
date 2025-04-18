import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconCheckCircleFill24Icon],svg[octicon-check-circle-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m16.28-2.72a.75.75 0 0 0-.018-1.042a.75.75 0 0 0-1.042-.018l-5.97 5.97l-2.47-2.47a.75.75 0 0 0-1.042.018a.75.75 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></svg:path>`,
})
export class OcticonCheckCircleFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
