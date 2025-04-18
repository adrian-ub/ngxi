import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBagPersonalPlusOutlineIcon],svg[mdi-bag-personal-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19h-3v3h-2v-3h-3v-2h3v-3h2v3h3zM8 2c-1.1 0-2 .9-2 2v1C3.8 5 2 6.8 2 9v11c0 1.1.9 2 2 2h9.5c-.5-.6-.9-1.3-1.2-2H4v-4h2v2h1v-2h5.3c.1-.3.3-.7.5-1H4V9c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v3.3c.6-.2 1.3-.3 2-.3V9c0-2.2-1.8-4-4-4V4c0-1.1-.9-2-2-2zm0 2h4v1H8zm2 5l-2 2l2 2l2-2z"></svg:path>`,
})
export class MdiBagPersonalPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
