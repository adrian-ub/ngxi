import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCircleStrokedIcon],svg[maki-circle-stroked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 12.3a4.8 4.8 0 1 1 0-9.6a4.8 4.8 0 0 1 0 9.6m0 1.7a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path>`,
})
export class MakiCircleStrokedIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
