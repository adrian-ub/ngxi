import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCrossedFlagsIcon],svg[openmoji-crossed-flags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m6.84 25.478l19.85-9.489l6.47 13.533l-19.85 9.489zM58.528 39.01L38.68 29.523l6.47-13.533l19.848 9.489z"></svg:path><svg:circle cx="20" cy="27.5" r="2.5"></svg:circle><svg:circle cx="51.841" cy="27.5" r="2.5"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 56L27 16M6.84 25.478l19.85-9.489l6.47 13.533l-19.85 9.489zM25.841 56l19-40m13.687 23.01L38.68 29.523l6.47-13.533l19.848 9.489z"></svg:path><svg:g fill="#d22f27"><svg:circle cx="20" cy="27.5" r="2.5"></svg:circle><svg:circle cx="51.841" cy="27.5" r="2.5"></svg:circle></svg:g>`,
})
export class OpenmojiCrossedFlagsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
