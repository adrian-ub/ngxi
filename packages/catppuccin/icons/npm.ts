import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinNpmIcon],svg[catppuccin-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#ed8796" d="M2.45 1.5a.95.95 0 0 0-.95.95v11.1a.95.95 0 0 0 .95.95h11.1a.95.95 0 0 0 .95-.95V2.45a.95.95 0 0 0-.95-.95z"></svg:path><svg:path stroke="#cad3f5" d="M4.5 4.5h7v7h-2v-5h-2v5h-3z"></svg:path></svg:g>`,
})
export class CatppuccinNpmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
