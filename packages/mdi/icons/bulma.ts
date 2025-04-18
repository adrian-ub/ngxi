import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBulmaIcon],svg[mdi-bulma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.38 2l-5 5l-1.25 8.75L11.38 22l7.5-5l-5-5l3.75-3.75z"></svg:path>`,
})
export class MdiBulmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
