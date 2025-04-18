import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTelescopeIcon],svg[icon-park-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="12" height="38" x="6" y="5" rx="6"></svg:rect><svg:rect width="12" height="38" x="30" y="5" rx="6"></svg:rect><svg:path fill="#2F88FF" d="M12 43C15.3137 43 18 40.3137 18 37C18 33.6863 15.3137 31 12 31C8.68629 31 6 33.6863 6 37C6 40.3137 8.68629 43 12 43Z"></svg:path><svg:path fill="#2F88FF" d="M36 43C39.3137 43 42 40.3137 42 37C42 33.6863 39.3137 31 36 31C32.6863 31 30 33.6863 30 37C30 40.3137 32.6863 43 36 43Z"></svg:path><svg:path stroke-linecap="round" d="M30 21C30 17.6863 27.3137 15 24 15C20.6863 15 18 17.6863 18 21"></svg:path><svg:path stroke-linecap="round" d="M30 31C30 27.6863 27.3137 25 24 25C20.6863 25 18 27.6863 18 31"></svg:path></svg:g>`,
})
export class IconParkTelescopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
