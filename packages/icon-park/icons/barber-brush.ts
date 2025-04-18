import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBarberBrushIcon],svg[icon-park-barber-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M29.7961 24H16.2039C16.2039 24 12.2176 31.7083 18.7524 34.8333C22.9346 37.3333 16.2039 44 16.2039 44H29.7962C29.7962 44 23.0654 36.7083 27.2476 34.8333C33.7824 31.7083 29.7961 24 29.7961 24Z"></svg:path><svg:path d="M37 10L30 24H16L9 10C9 10 12 4 23 4C34 4 37 10 37 10Z"></svg:path><svg:path d="M25 24L27 12"></svg:path><svg:path d="M21 24L19 12"></svg:path></svg:g>`,
})
export class IconParkBarberBrushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
