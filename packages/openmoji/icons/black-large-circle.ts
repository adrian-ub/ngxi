import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBlackLargeCircleIcon],svg[openmoji-black-large-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path stroke="#000" stroke-linejoin="round" stroke-width="2" d="M36 66c16.569 0 30-13.431 30-30C66 19.432 52.569 6 36 6C19.432 6 6 19.432 6 36c0 16.57 13.432 30 30 30Z"></svg:path><svg:path fill="#3F3F3F" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M36 66c16.569 0 30-13.431 30-30C66 19.432 52.569 6 36 6C19.432 6 6 19.432 6 36c0 16.57 13.432 30 30 30Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M36 66c16.569 0 30-13.431 30-30C66 19.432 52.569 6 36 6C19.432 6 6 19.432 6 36c0 16.57 13.432 30 30 30Z"></svg:path>`,
})
export class OpenmojiBlackLargeCircleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
