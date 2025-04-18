import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineStretchingIcon],svg[icon-park-outline-stretching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V25"></svg:path><svg:path stroke-linecap="round" d="M24.001 16v8M42 6v8m-9.999 10h-8"></svg:path><svg:path d="M42 6L24 24"></svg:path><svg:path stroke-linecap="round" d="M42 6h-8"></svg:path></svg:g>`,
})
export class IconParkOutlineStretchingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
