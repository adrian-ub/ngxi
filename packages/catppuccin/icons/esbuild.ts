import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinEsbuildIcon],svg[catppuccin-esbuild-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.5-10.5h2L13 8l-2.5 3.5h-2L11 8zM4 4.5h2L8.5 8L6 11.5H4L6.5 8z"></svg:path>`,
})
export class CatppuccinEsbuildIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
