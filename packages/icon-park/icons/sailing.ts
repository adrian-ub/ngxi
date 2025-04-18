import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSailingIcon],svg[icon-park-sailing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M19 30H11L19 21"></svg:path><svg:path stroke-linejoin="round" d="M39 30C39 17.0082 28.9937 4 19 4V30H39Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M32.6512 41.5765L42 36L6 36L8 42L31.1144 42C31.6555 42 32.1865 41.8537 32.6512 41.5765Z"></svg:path><svg:path stroke-linejoin="round" d="M19 30V36"></svg:path><svg:path d="M29 21L41 21"></svg:path></svg:g>`,
})
export class IconParkSailingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
