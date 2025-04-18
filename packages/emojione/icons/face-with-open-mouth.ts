import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFaceWithOpenMouthIcon],svg[emojione-face-with-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#664e27"><svg:circle cx="32" cy="45.1" r="7"></svg:circle><svg:circle cx="20.2" cy="25" r="4.5"></svg:circle><svg:circle cx="42.7" cy="25" r="4.5"></svg:circle></svg:g>`,
})
export class EmojioneFaceWithOpenMouthIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
