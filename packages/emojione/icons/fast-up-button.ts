import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFastUpButtonIcon],svg[emojione-fast-up-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M50 46L38.1 33.3H50L32 14L14 33.3h11.9L14 46z"></svg:path>`,
})
export class EmojioneFastUpButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
