import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiMediumblackcircleIcon],svg[fxemoji-mediumblackcircle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256.167" r="223.167" fill="#132028"></svg:circle>`,
})
export class FxemojiMediumblackcircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
