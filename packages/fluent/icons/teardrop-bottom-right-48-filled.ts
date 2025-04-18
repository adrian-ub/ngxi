import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTeardropBottomRight48FilledIcon],svg[fluent-teardrop-bottom-right-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20v15.75A4.25 4.25 0 0 1 39.75 44H24C12.954 44 4 35.046 4 24"></svg:path>`,
})
export class FluentTeardropBottomRight48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
