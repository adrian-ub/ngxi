import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFloatIcon],svg[icon-park-float-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 40C35.0457 40 44 32.8366 44 24C44 15.1634 35.0457 8 24 8C12.9543 8 4 15.1634 4 24C4 32.8366 12.9543 40 24 40Z"></svg:path><svg:path fill="#2F88FF" d="M24 28C29.5228 28 34 25.3137 34 22C34 18.6863 29.5228 16 24 16C18.4772 16 14 18.6863 14 22C14 25.3137 18.4772 28 24 28Z"></svg:path><svg:path stroke-linecap="round" d="M24 16V8"></svg:path><svg:path stroke-linecap="round" d="M32 18C32 18 34.625 14 39 14"></svg:path><svg:path stroke-linecap="round" d="M16 18C16 18 14 14 9 14"></svg:path><svg:path stroke-linecap="round" d="M18 27C18 27 12 29 11 36"></svg:path><svg:path stroke-linecap="round" d="M30 27C30 27 36.5 29 37 36"></svg:path></svg:g>`,
})
export class IconParkFloatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
