import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinDIcon],svg[catppuccin-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ee99a0" stroke-linecap="round" stroke-linejoin="round" d="M15 3.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-8-1c1.84 0 3.47.9 4.47 2.29a2 2 0 1 1 1.01 3.71a5.5 5.5 0 0 1-5.48 5H1.5v-11Zm-3.5 2v7H7a3.5 3.5 0 0 0 0-7z"></svg:path>`,
})
export class CatppuccinDIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
