import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosVueIcon],svg[logos-vue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z"></svg:path><svg:path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z"></svg:path><svg:path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z"></svg:path>`,
})
export class LogosVueIcon {
  readonly viewBox = input("0 0 256 221")
  readonly width = input("1.16em")
  readonly height = input("1em")
}
