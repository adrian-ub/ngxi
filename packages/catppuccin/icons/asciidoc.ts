import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinAsciidocIcon],svg[catppuccin-asciidoc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round" d="m3 15l1.714-4M5.78 8.5L9 1l6 14M1 8.5h7M1 11h6"></svg:path>`,
})
export class CatppuccinAsciidocIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
