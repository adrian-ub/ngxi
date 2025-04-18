import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCornerRightDownIcon],svg[gg-corner-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.399 6.85a2 2 0 0 0-2.002-1.998l-8 .007l-.002-2l8-.007a4 4 0 0 1 4.004 3.996l.01 10.306l3.78-3.788l1.416 1.412l-6.358 6.37l-6.37-6.358l1.413-1.415l4.119 4.11z"></svg:path>`,
})
export class GgCornerRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
