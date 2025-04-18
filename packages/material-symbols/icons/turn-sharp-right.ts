import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTurnSharpRightIcon],svg[material-symbols-turn-sharp-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21v-6q0-.825.588-1.412T8 13h8V6.8l-1.6 1.6L13 7l4-4l4 4l-1.4 1.4L18 6.8V13q0 .825-.587 1.413T16 15H8v6z"></svg:path>`,
})
export class MaterialSymbolsTurnSharpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
