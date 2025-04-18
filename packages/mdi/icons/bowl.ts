import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBowlIcon],svg[mdi-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15c0 3.9-3.1 7-7 7H9c-3.9 0-7-3.1-7-7v-3h20z"></svg:path>`,
})
export class MdiBowlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
