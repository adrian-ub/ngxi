import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAviationIcon],svg[icon-park-outline-aviation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M32.5 30H36l8-8H11a3 3 0 0 0-1.8.6L4 26.5l6.277 3.177A3 3 0 0 0 11.63 30H13"></svg:path><svg:path d="M27 31c0 1.657-3.582 3-8 3v-6c4.418 0 8 1.343 8 3Z"></svg:path><svg:path stroke-linecap="round" d="m31 18l-9 4h15l3-10h-3z"></svg:path></svg:g>`,
})
export class IconParkOutlineAviationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
