import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiLargeredcircleIcon],svg[fxemoji-largeredcircle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256.167" r="223.167" fill="#FF473E"></svg:circle>`,
})
export class FxemojiLargeredcircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
