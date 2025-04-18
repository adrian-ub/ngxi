import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeJestIcon],svg[material-icon-theme-jest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f4511e" d="m21.032 8l-1.878 4L20 13.998h2L22.928 12z"></svg:path><svg:path fill="#f4511e" d="m14 2l2 8h2l3.032-6L24 10h2l2-8zm14 18h-2a4.34 4.34 0 0 1-4-4h-2a4.17 4.17 0 0 1-4.23 3.87c-1.522 2.38-5.155 4.283-7.77 5.148A4.724 4.724 0 0 1 5 20H4c-4.718 7.978 3.064 13.219 10.955 7.895C18.85 24.497 29.658 27.487 28 20"></svg:path><svg:circle cx="7" cy="15" r="3" fill="#f4511e"></svg:circle><svg:circle cx="27" cy="15" r="3" fill="#f4511e"></svg:circle><svg:circle cx="16" cy="16" r="2" fill="#f4511e"></svg:circle>`,
})
export class MaterialIconThemeJestIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
