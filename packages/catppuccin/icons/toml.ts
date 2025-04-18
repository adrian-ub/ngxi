import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinTomlIcon],svg[catppuccin-toml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ee99a0" stroke-linecap="round" stroke-linejoin="round" d="M3.5 1.5h-2v13h2m9-13h2v13h-2m-8-11h7v3h-2v6h-3v-6h-2z"></svg:path>`,
})
export class CatppuccinTomlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
