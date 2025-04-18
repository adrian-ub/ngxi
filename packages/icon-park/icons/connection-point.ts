import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkConnectionPointIcon],svg[icon-park-connection-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M5 24L43 24"></svg:path><svg:path fill="#2F88FF" d="M28 4H20C18.8954 4 18 4.89543 18 6V14C18 15.1046 18.8954 16 20 16H28C29.1046 16 30 15.1046 30 14V6C30 4.89543 29.1046 4 28 4Z"></svg:path><svg:path fill="#2F88FF" d="M16 32H8C6.89543 32 6 32.8954 6 34V42C6 43.1046 6.89543 44 8 44H16C17.1046 44 18 43.1046 18 42V34C18 32.8954 17.1046 32 16 32Z"></svg:path><svg:path fill="#2F88FF" d="M40 32H32C30.8954 32 30 32.8954 30 34V42C30 43.1046 30.8954 44 32 44H40C41.1046 44 42 43.1046 42 42V34C42 32.8954 41.1046 32 40 32Z"></svg:path><svg:path stroke-linecap="round" d="M24 24V16"></svg:path><svg:path stroke-linecap="round" d="M36 32V24"></svg:path><svg:path stroke-linecap="round" d="M12 32V24"></svg:path></svg:g>`,
})
export class IconParkConnectionPointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
