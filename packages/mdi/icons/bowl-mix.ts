import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBowlMixIcon],svg[mdi-bowl-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.2 11l4.1-6.5l1.7 1l-3.4 5.5zm-.6 1H2v3c0 3.9 3.1 7 7 7h6c3.9 0 7-3.1 7-7v-3z"></svg:path>`,
})
export class MdiBowlMixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
