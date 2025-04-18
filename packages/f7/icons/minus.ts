import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7MinusIcon],svg[f7-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.762 30.098h34.476c1.125 0 2.11-.961 2.11-2.11c0-1.148-.985-2.086-2.11-2.086H10.762c-1.125 0-2.11.938-2.11 2.086c0 1.149.985 2.11 2.11 2.11"></svg:path>`,
})
export class F7MinusIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
