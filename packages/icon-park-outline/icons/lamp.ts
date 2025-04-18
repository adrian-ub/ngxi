import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLampIcon],svg[icon-park-outline-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M14 9.5a3.5 3.5 0 1 1 7 0V21h-7zm13 0a3.5 3.5 0 1 1 7 0V21h-7z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 34h12v8H18z"></svg:path><svg:path d="M10 22a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v4a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8z"></svg:path></svg:g>`,
})
export class IconParkOutlineLampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
