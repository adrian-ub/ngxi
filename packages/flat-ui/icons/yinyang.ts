import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiYinyangIcon],svg[flat-ui-yinyang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="50" cy="50" r="50" fill="#34495E"></svg:circle><svg:path fill="#fff" d="M50 91C28 91 9 72.645 9 50S28 9 50 9z"></svg:path><svg:path fill="#34495E" d="M50 9c22 0 41 18.355 41 41S72 91 50 91z"></svg:path><svg:circle cx="50.5" cy="70.5" r="20.5" fill="#fff"></svg:circle><svg:circle cx="50.5" cy="70.5" r="8.5" fill="#34495E"></svg:circle><svg:circle cx="49.5" cy="29.5" r="20.5" fill="#34495E"></svg:circle><svg:circle cx="50" cy="29.5" r="8.5" fill="#fff"></svg:circle>`,
})
export class FlatUiYinyangIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
