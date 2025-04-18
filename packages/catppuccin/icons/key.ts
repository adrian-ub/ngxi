import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinKeyIcon],svg[catppuccin-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 10.5a4.5 4.5 0 1 0-4.02-2.48L1.5 12.5v2h2v-2h2v-2h2l.48-.48c.6.3 1.3.48 2.02.48"></svg:path><svg:path d="M12 5a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1"></svg:path></svg:g>`,
})
export class CatppuccinKeyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
