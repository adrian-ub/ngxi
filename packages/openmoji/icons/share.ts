import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiShareIcon],svg[openmoji-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="50" cy="22" r="5"></svg:circle><svg:circle cx="22" cy="38" r="5"></svg:circle><svg:circle cx="50" cy="50" r="5"></svg:circle><svg:path d="m27 40l18 8m0-23L27 35"></svg:path></svg:g>`,
})
export class OpenmojiShareIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
