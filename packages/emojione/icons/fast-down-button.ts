import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFastDownButtonIcon],svg[emojione-fast-down-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="m14 18l11.9 12.7H14L32 50l18-19.3H38.1L50 18z"></svg:path>`,
})
export class EmojioneFastDownButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
