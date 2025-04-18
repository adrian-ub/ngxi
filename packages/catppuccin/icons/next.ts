import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinNextIcon],svg[catppuccin-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.33 12.85a6.5 6.5 0 1 1 1.55-2.08"></svg:path><svg:path d="M12.33 12.85L5.5 4.5v7m5-7v3"></svg:path></svg:g>`,
})
export class CatppuccinNextIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
