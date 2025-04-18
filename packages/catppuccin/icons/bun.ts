import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinBunIcon],svg[catppuccin-bun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#f4dbd6" d="M.5 8.51c0 5.25 5.5 6 7.5 6s7.5-.75 7.5-6c0-4-4.5-6-7.5-7c-3 1-7.5 3-7.5 7"></svg:path><svg:path stroke="#ee99a0" d="M6.5 10.51h3c-.33.67-.83 1-1.5 1s-1.17-.33-1.5-1"></svg:path><svg:path stroke="#cad3f5" d="M5 8.51a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m6 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class CatppuccinBunIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
