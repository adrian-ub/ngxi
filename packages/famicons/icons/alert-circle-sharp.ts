import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsAlertCircleSharpIcon],svg[famicons-alert-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M240 304h32l6-160h-44z"></svg:path><svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m20 319.91h-40v-40h40ZM272 304h-32l-6-160h44Z"></svg:path>`,
})
export class FamiconsAlertCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
