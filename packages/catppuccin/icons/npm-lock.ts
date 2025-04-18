import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinNpmLockIcon],svg[catppuccin-npm-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8087a2" d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"></svg:path><svg:path stroke="#cad3f5" d="M9.5 9V5.5h-2v6h-4v-8h8v3"></svg:path><svg:path stroke="#ed8796" d="M7.54 13.5H3A1.5 1.5 0 0 1 1.5 12V3c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v3.5"></svg:path></svg:g>`,
})
export class CatppuccinNpmLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
