import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsEzmeralIcon],svg[grommet-icons-ezmeral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8h34v8H7zM1 8h6v8H1zm40 0h6v8h-6zM7 16h34v6H7zM7 2h34v6H7zM1 8l6-6v6zm0 8l6 6v-6zm46-8l-6-6v6zm0 8l-6 6v-6z"></svg:path>`,
})
export class GrommetIconsEzmeralIcon {
  readonly viewBox = input("0 0 48 24")
  readonly width = input("2em")
  readonly height = input("1em")
}
