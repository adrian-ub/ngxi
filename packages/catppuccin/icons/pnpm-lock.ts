import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPnpmLockIcon],svg[catppuccin-pnpm-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8087a2" d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"></svg:path><svg:path stroke="#f5a97f" d="M4.5 1.5v3"></svg:path><svg:path stroke="#cad3f5" d="M7.5 7.5v3m-3-6v6"></svg:path><svg:path stroke="#f5a97f" d="M7.5 1.5v6m3 0v-6h-9v3h9"></svg:path><svg:path stroke="#cad3f5" d="M10.5 7.5h-9v3h7"></svg:path></svg:g>`,
})
export class CatppuccinPnpmLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
