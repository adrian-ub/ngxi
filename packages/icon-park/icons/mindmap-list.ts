import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMindmapListIcon],svg[icon-park-mindmap-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M26 24L44 24"></svg:path><svg:path d="M14 24L18 24"></svg:path><svg:path d="M18 38H44"></svg:path><svg:path d="M6 38H10"></svg:path><svg:path d="M18 10H44"></svg:path><svg:path d="M6 10H10"></svg:path></svg:g>`,
})
export class IconParkMindmapListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
