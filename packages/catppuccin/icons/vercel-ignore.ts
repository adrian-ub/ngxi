import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinVercelIgnoreIcon],svg[catppuccin-vercel-ignore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" d="M1.5 13.5h13L8 2z"></svg:path>`,
})
export class CatppuccinVercelIgnoreIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
