import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChairIcon],svg[icon-park-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 23L12 44"></svg:path><svg:path d="M28 23L36 44"></svg:path><svg:path d="M16 34L32 34"></svg:path><svg:path fill="#2F88FF" d="M29.4545 23H18.5455C15.8182 23 14 21.3333 14 18.8333V12H18V6C18 4.89543 18.8954 4 20 4H28C29.1046 4 30 4.89543 30 6V12H34V18.8333C34 21.3333 32.1818 23 29.4545 23Z"></svg:path><svg:path d="M30 12H38"></svg:path><svg:path d="M18 12H10"></svg:path></svg:g>`,
})
export class IconParkChairIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
