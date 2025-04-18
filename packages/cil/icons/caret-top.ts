import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCaretTopIcon],svg[cil-caret-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 400.357H16.333v-36.449L256.047 96L496 365.81Zm-440.708-32h400.149L255.975 144.07Z"></svg:path>`,
})
export class CilCaretTopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
