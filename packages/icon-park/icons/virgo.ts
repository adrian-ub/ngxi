import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVirgoIcon],svg[icon-park-virgo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 17C34 17 41.0879 16.8877 41.9586 23.6392C42.417 27.1934 39.2376 32.6747 24 43.0005"></svg:path><svg:path fill="#000" d="M16 11C16 12.1046 16.8954 13 18 13C19.1046 13 20 12.1046 20 11H16ZM4 11C4 12.1046 4.89543 13 6 13C7.10457 13 8 12.1046 8 11H4ZM8 11C8 8.79086 9.79086 7 12 7V3C7.58172 3 4 6.58172 4 11H8ZM12 7C14.2091 7 16 8.79086 16 11H20C20 6.58172 16.4183 3 12 3V7Z"></svg:path><svg:path fill="#000" d="M28 11C28 12.1046 28.8954 13 30 13C31.1046 13 32 12.1046 32 11H28ZM16 11C16 12.1046 16.8954 13 18 13C19.1046 13 20 12.1046 20 11H16ZM20 11C20 8.79086 21.7909 7 24 7V3C19.5817 3 16 6.58172 16 11H20ZM24 7C26.2091 7 28 8.79086 28 11H32C32 6.58172 28.4183 3 24 3V7Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 11V29"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 11V29"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M30 11V29C30 34 32.5 39 42 39"></svg:path></svg:g>`,
})
export class IconParkVirgoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
