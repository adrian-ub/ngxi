import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFaceWithoutMouthIcon],svg[emojione-face-without-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#664e27"><svg:circle cx="20.5" cy="28.5" r="5"></svg:circle><svg:circle cx="43.5" cy="28.5" r="5"></svg:circle></svg:g>`,
})
export class EmojioneFaceWithoutMouthIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
