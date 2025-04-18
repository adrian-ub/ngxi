import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiMinimizeIcon],svg[fxemoji-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#597B91" d="M471.695 411.923v47.823a6.913 6.913 0 0 1-6.913 6.913H47.217a6.913 6.913 0 0 1-6.913-6.913v-47.823a6.913 6.913 0 0 1 6.913-6.913h417.566a6.913 6.913 0 0 1 6.912 6.913"></svg:path>`,
})
export class FxemojiMinimizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
