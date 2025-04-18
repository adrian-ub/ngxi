import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoUnderlineIcon],svg[fontisto-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 0a1.2 1.2 0 0 0-1.2 1.2v10.399a5.2 5.2 0 1 1-10.4 0V1.2A1.202 1.202 0 0 0 0 1.198v10.401a7.6 7.6 0 0 0 15.2 0V1.2A1.2 1.2 0 0 0 14.001 0zm0 21.6H1.2a1.202 1.202 0 0 0-.002 2.4H14a1.202 1.202 0 0 0 .002-2.4z"></svg:path>`,
})
export class FontistoUnderlineIcon {
  readonly viewBox = input("0 0 15 24")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
