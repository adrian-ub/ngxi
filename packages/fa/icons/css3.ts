import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faCss3Icon],svg[fa-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M275 0h1505l-266 1333l-804 267l-698-267l71-356h297l-29 147l422 161l486-161l68-339H119l58-297h1209l38-191H216z"></svg:path>`,
})
export class FaCss3Icon {
  readonly viewBox = input("0 0 1792 1600")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
