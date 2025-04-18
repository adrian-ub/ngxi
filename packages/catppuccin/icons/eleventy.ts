import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinEleventyIcon],svg[catppuccin-eleventy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M12.5 5.5L14 13m1.5-7.5L14 13s-.215 1-1 1s-.5-.5-.5-.5M8 5.5h2.5M9 2v9s0 1 1 1h.5M.5 3L2 2v10m2-9l1.5-1v10"></svg:path>`,
})
export class CatppuccinEleventyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
