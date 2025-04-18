import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBlackCircleIcon],svg[openmoji-black-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M36 64c15.464 0 28-12.536 28-28S51.464 8 36 8S8 20.536 8 36s12.536 28 28 28"></svg:path><svg:path fill="#3F3F3F" d="M36 64c15.464 0 28-12.536 28-28S51.464 8 36 8S8 20.536 8 36s12.536 28 28 28"></svg:path><svg:path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M36 64c15.464 0 28-12.536 28-28S51.464 8 36 8S8 20.536 8 36s12.536 28 28 28Z"></svg:path>`,
})
export class OpenmojiBlackCircleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
