import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinBinaryIcon],svg[catppuccin-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 1.5h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2"></svg:path><svg:path d="M10.5 9.5h1v3.05M6 9.5h1c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5m4-6h1c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4c0-.28.22-.5.5-.5m-4.5 0h1v3.05"></svg:path></svg:g>`,
})
export class CatppuccinBinaryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
