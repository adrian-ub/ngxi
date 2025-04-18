import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterBIcon],svg[gravity-ui-circle-letter-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.75 4.5a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h2.125a2.125 2.125 0 0 0 1.361-3.757A2 2 0 0 0 8.5 4.5zm.75 5.25V8.5h1.375a.625.625 0 1 1 0 1.25zM9 6.5a.5.5 0 0 1-.5.5h-1V6h1a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterBIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
