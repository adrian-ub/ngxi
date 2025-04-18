import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineInboxIcon],svg[icon-park-outline-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 30L9 6h30l5 24"></svg:path><svg:path d="M4 30h10.91l1.817 6h14.546l1.818-6H44v13H4z"></svg:path><svg:path stroke-linecap="round" d="M19 14h10m-13 8h16"></svg:path></svg:g>`,
})
export class IconParkOutlineInboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
