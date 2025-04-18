import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWindIcon],svg[icon-park-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 17H10C7.79086 17 6 18.7909 6 21V21C6 23.2091 7.79086 25 10 25H12"></svg:path><svg:path d="M22 33H19C16.7909 33 15 34.7909 15 37V37C15 39.2091 16.7909 41 19 41H22"></svg:path><svg:path d="M27 7H24C21.7909 7 20 8.79086 20 11V11C20 13.2091 21.7909 15 24 15H27"></svg:path><svg:path d="M24 15H40"></svg:path><svg:path d="M12 25H42"></svg:path><svg:path d="M22 33H34"></svg:path></svg:g>`,
})
export class IconParkWindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
