import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPnpmIcon],svg[catppuccin-pnpm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#f5a97f" d="M6 2v4"></svg:path><svg:path stroke="#cad3f5" d="M10 9.5V14M6 6v8"></svg:path><svg:path stroke="#f5a97f" d="M10 2v7.5m4 .5V2H2v4h12"></svg:path><svg:path stroke="#cad3f5" d="M2 10v4h12v-4z"></svg:path></svg:g>`,
})
export class CatppuccinPnpmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
