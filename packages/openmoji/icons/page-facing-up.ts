import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPageFacingUpIcon],svg[openmoji-page-facing-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="m36 10.958l19.958 20.105v29.895H16.042v-50z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m36 10.958l19.958 20.105v29.895H16.042v-50z"></svg:path><svg:path d="m36 10.958l-.042 20.105h13.188"></svg:path></svg:g>`,
})
export class OpenmojiPageFacingUpIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
