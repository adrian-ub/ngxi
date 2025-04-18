import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCircleIcon],svg[maki-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0"></svg:path>`,
})
export class MakiCircleIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
