import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinHaxeIcon],svg[catppuccin-haxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 1.5H5l3 1.75l3-1.75h3.5V5l-1.75 3l1.75 3v3.5H11l-3-1.75l-3 1.75H1.5V11l1.75-3L1.5 5z"></svg:path><svg:path d="m12.65 8.35l-4.3 4.3a.5.5 0 0 1-.7 0l-4.3-4.3a.5.5 0 0 1 0-.7l4.3-4.3c.2-.2.5-.2.7 0l4.3 4.3c.2.2.2.5 0 .7"></svg:path></svg:g>`,
})
export class CatppuccinHaxeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
