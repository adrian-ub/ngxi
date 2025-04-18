import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBaokemengIcon],svg[icon-park-baokemeng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M44 24H30C30 20.69 27.31 18 24 18C20.69 18 18 20.69 18 24H4C4 12.95 12.95 4 24 4C35.05 4 44 12.95 44 24Z"></svg:path><svg:path stroke-linecap="round" d="M18 24H4C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24H30"></svg:path><svg:path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"></svg:path></svg:g>`,
})
export class IconParkBaokemengIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
