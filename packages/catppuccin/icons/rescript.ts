import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinRescriptIcon],svg[catppuccin-rescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 1.5h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2"></svg:path><svg:path d="M5.5 4.55c.83 0 1.5.67 1.5 1.5v4a1.5 1.5 0 1 1-3 0v-4c0-.83.67-1.5 1.5-1.5M12 6a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 9 6a1.5 1.5 0 0 1 1.5-1.5A1.5 1.5 0 0 1 12 6"></svg:path></svg:g>`,
})
export class CatppuccinRescriptIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
