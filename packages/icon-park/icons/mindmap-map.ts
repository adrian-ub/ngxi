import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMindmapMapIcon],svg[icon-park-mindmap-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M26 24L42 24"></svg:path><svg:path d="M26 38H42"></svg:path><svg:path d="M26 10H42"></svg:path><svg:path d="M18 24L6 24C6 24 7.65685 24 10 24M18 38C12 36 16 24 10 24M18 10C12 12 16 24 10 24"></svg:path></svg:g>`,
})
export class IconParkMindmapMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
