import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPaintBrushBroadFillIcon],svg[ph-paint-brush-broad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 24H72a40 40 0 0 0-40 40v72a24 24 0 0 0 24 24h48l-7.89 46.67A8.4 8.4 0 0 0 96 208a32 32 0 0 0 64 0a8.4 8.4 0 0 0-.11-1.33L152 160h48a24 24 0 0 0 24-24V32a8 8 0 0 0-8-8M72 40h104v40a8 8 0 0 0 16 0V40h16v72H48V64a24 24 0 0 1 24-24"></svg:path>`,
})
export class PhPaintBrushBroadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
