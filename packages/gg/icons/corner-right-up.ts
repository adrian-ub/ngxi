import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCornerRightUpIcon],svg[gg-corner-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.29 10.625L7.877 9.21l6.37-6.358l6.358 6.37l-1.416 1.413l-3.78-3.789l-.01 10.306a4 4 0 0 1-4.004 3.996l-8-.007l.002-2l8 .007a2 2 0 0 0 2.002-1.998l.01-10.636z"></svg:path>`,
})
export class GgCornerRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
