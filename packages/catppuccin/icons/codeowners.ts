import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCodeownersIcon],svg[catppuccin-codeowners-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m8.01 1.5l5.728 1.774C15.25 11.154 9.813 14.5 7.984 14.5s-7.281-3.357-5.7-11.226zM8 8.5v2z"></svg:path><svg:circle cx="8" cy="7" r="1.5"></svg:circle></svg:g>`,
})
export class CatppuccinCodeownersIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
