import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamUnionIcon],svg[jam-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.858 2.48L10 2.888l-.858-.408a5 5 0 1 0 0 9.04l.858-.408l.858.408a5 5 0 1 0 0-9.04M13 0a7 7 0 1 1-3 13.326A7 7 0 1 1 10 .673A7 7 0 0 1 13 0"></svg:path>`,
})
export class JamUnionIcon {
  readonly viewBox = input("0 0 20 14")
  readonly width = input("1.43em")
  readonly height = input("1em")
}
