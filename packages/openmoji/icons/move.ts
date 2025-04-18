import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMoveIcon],svg[openmoji-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M32.208 30.16h9.406v9.831h-9.406z"></svg:path><svg:path fill="#9b9b9a" d="M11 36.323h24.698v24.698H11z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M56 38.219v2.5h-2.5"></svg:path><svg:path stroke-dasharray="0 0 3.94 3.94" d="M49.56 40.719H35.772m-4.47-6.44V20.491"></svg:path><svg:path d="M31.302 18.521v-2.5h2.5"></svg:path><svg:path stroke-dasharray="0 0 3.94 3.94" d="M37.742 16.021H51.53"></svg:path><svg:path d="M53.5 16.021H56v2.5"></svg:path><svg:path stroke-dasharray="0 0 3.94 3.94" d="M56 22.46v13.789"></svg:path><svg:path d="M11 36.323h24.698v24.698H11z"></svg:path><svg:path d="m35.601 36.419l7.033-7.032V36m0-6.613h-6.571"></svg:path></svg:g>`,
})
export class OpenmojiMoveIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
