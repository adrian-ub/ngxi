import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTeardropBottomRight16FilledIcon],svg[fluent-teardrop-bottom-right-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8a7 7 0 0 1 14 0v5.25A1.75 1.75 0 0 1 13.25 15H8a7 7 0 0 1-7-7"></svg:path>`,
})
export class FluentTeardropBottomRight16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
