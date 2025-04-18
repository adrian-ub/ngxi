import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinVercelIcon],svg[catppuccin-vercel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M1.5 13.5h13L8 2z"></svg:path>`,
})
export class CatppuccinVercelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
