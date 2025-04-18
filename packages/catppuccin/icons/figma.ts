import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFigmaIcon],svg[catppuccin-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#a6da95" d="M7.5 11.5h-2a2 2 0 1 0 2 2z"></svg:path><svg:path stroke="#c6a0f6" d="M7.5 10.5v-4h-2a2 2 0 1 0 0 4z"></svg:path><svg:path stroke="#ed8796" d="M7.5 5.5v-4h-2a2 2 0 1 0 0 4z"></svg:path><svg:path stroke="#f5a97f" d="M10.5 5.5a2 2 0 1 0 0-4h-2v4z"></svg:path><svg:path stroke="#91d7e3" d="M12.5 8.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2"></svg:path></svg:g>`,
})
export class CatppuccinFigmaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
