import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinMermaidIcon],svg[catppuccin-mermaid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5c0 6 2.25 5.75 4 7c.83.67 1.17 2 1 4h3c-.17-2 .17-3.33 1-4c1.75-1.25 4-1 4-7C12 2.5 10 3 8 7C6 3 4 2.5 1.5 2.5"></svg:path>`,
})
export class CatppuccinMermaidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
