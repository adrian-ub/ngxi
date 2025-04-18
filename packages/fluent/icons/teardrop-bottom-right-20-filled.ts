import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTeardropBottomRight20FilledIcon],svg[fluent-teardrop-bottom-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10a8 8 0 1 1 16 0v6a2 2 0 0 1-2 2h-6a8 8 0 0 1-8-8"></svg:path>`,
})
export class FluentTeardropBottomRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
