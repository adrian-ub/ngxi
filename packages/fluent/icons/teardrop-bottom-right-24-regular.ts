import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTeardropBottomRight24RegularIcon],svg[fluent-teardrop-bottom-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10v7.75A2.25 2.25 0 0 1 19.75 22H12C6.477 22 2 17.523 2 12m10-8.5a8.5 8.5 0 0 0 0 17h7.75a.75.75 0 0 0 .75-.75V12A8.5 8.5 0 0 0 12 3.5"></svg:path>`,
})
export class FluentTeardropBottomRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
