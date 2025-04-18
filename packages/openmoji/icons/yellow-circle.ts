import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiYellowCircleIcon],svg[openmoji-yellow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#fcea2b"></svg:circle><svg:circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"></svg:circle>`,
})
export class OpenmojiYellowCircleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
