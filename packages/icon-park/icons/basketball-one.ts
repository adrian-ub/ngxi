import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBasketballOneIcon],svg[icon-park-basketball-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M18 24C18 17.3762 23.3762 12 30 12C36.6238 12 42 17.3762 42 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M18 24C18 17.3762 23.3762 12 30 12C36.6238 12 42 17.3762 42 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M12 4H4V36H12V4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M12 24H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M18 24L20 28.5C22 33.5 21.9 38.9 20 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M40.9997 24L38.9997 28.5C36.9996 33.5 37.0896 38.9 38.9996 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M21.2197 32H37.7797"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M21.6895 40H37.3195"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M29.5 40V24"></svg:path></svg:g>`,
})
export class IconParkBasketballOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
