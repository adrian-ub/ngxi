import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinNixIcon],svg[catppuccin-nix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#7dc4e4" d="M.5 7.5H4m1.39-2L2.05 11"></svg:path><svg:path stroke="#8aadf4" d="M4 1.5L5.5 4m3.5.5H2.55"></svg:path><svg:path stroke="#7dc4e4" d="m12 1.5l-1.5 3m1.01 2.6L8.5 1.5"></svg:path><svg:path stroke="#8aadf4" d="M15.5 8.52L12 8.5m-1.38 2L14 5"></svg:path><svg:path stroke="#7dc4e4" d="m12.5 14.5l-2.5-3m-2.97.02l6.48-.02"></svg:path><svg:path stroke="#8aadf4" d="m4 14.5l1.5-3M4.53 9l2.97 5.5"></svg:path></svg:g>`,
})
export class CatppuccinNixIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
