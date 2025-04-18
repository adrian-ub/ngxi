import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDataServerIcon],svg[icon-park-data-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"></svg:path><svg:path stroke="#fff" d="M4 32H44"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M10 38H11"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M26 38H38"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M44 37V27"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M4 37V27"></svg:path></svg:g>`,
})
export class IconParkDataServerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
