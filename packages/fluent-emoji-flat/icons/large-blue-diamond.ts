import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLargeBlueDiamondIcon],svg[fluent-emoji-flat-large-blue-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0074BA" d="M3.414 17.414a2 2 0 0 1 0-2.828L14.728 3.272a2 2 0 0 1 2.828 0L28.87 14.586a2 2 0 0 1 0 2.828L17.556 28.728a2 2 0 0 1-2.828 0z"></svg:path>`,
})
export class FluentEmojiFlatLargeBlueDiamondIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
