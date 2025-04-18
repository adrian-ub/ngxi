import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCakeFiveIcon],svg[icon-park-cake-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 27H39L34.3125 44H13.6875L9 27Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M39 27H9C9 21.5 14.5 19 14.5 19C14.5 17 16.5 11 24 11C31.5 11 33.5 17 33.5 19C33.5 19 39 21.5 39 27Z"></svg:path><svg:path stroke-linecap="round" d="M6 27H42"></svg:path><svg:path d="M28 12C28 9.79086 26.2091 8 24 8C21.7909 8 20 9.79086 20 12"></svg:path><svg:path stroke-linecap="round" d="M24 8L28 4"></svg:path><svg:line x1="20" x2="20" y1="27" y2="44"></svg:line><svg:line x1="28" x2="28" y1="27" y2="44"></svg:line></svg:g>`,
})
export class IconParkCakeFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
