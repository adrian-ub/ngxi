import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTentIcon],svg[openmoji-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#FCEA2B" d="M36 18L14.54 55h42.92z"></svg:path><svg:path fill="#F1B31C" d="M36 18L14.54 55H36z"></svg:path><svg:path fill="#8967AA" d="M36 46.12c-1.48 0-4.44 1.48-7.4 1.48a7.4 7.4 0 0 0-7.4 7.4H36z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M36 18L14.54 55h42.92z"></svg:path><svg:path d="M36 18L14.54 55H36zm0 37V18"></svg:path><svg:path d="M36 46.12c-1.48 0-4.44 1.48-7.4 1.48a7.4 7.4 0 0 0-7.4 7.4H36zM36 55V18"></svg:path></svg:g>`,
})
export class OpenmojiTentIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
