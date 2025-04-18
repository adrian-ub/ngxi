import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBowlMixOutlineIcon],svg[mdi-bowl-mix-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.6 12H2v3c0 3.9 3.1 7 7 7h6c3.9 0 7-3.1 7-7v-3zm4.4 3c0 2.8-2.2 5-5 5H9c-2.8 0-5-2.2-5-5v-1h16zm-3.8-4l4.1-6.6L22 5.5L18.6 11z"></svg:path>`,
})
export class MdiBowlMixOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
