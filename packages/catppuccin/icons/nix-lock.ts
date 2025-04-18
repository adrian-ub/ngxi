import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinNixLockIcon],svg[catppuccin-nix-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#7dc4e4" d="M.5 7.5H4m1.39-2L2.05 11"></svg:path><svg:path stroke="#8aadf4" d="M4 1.5L5.5 4m3.5.5H2.55"></svg:path><svg:path stroke="#7dc4e4" d="m12 1.5l-1.5 3m1.01 2.6L8.5 1.5"></svg:path><svg:path stroke="#8aadf4" d="m12.733 7.063l.422-.688L14 5"></svg:path><svg:path stroke="#7dc4e4" d="m7.03 11.52l.81-.002"></svg:path><svg:path stroke="#8aadf4" d="m4 14.5l1.5-3M4.53 9l2.97 5.5"></svg:path></svg:g><svg:path fill="none" stroke="#8087a2" d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"></svg:path>`,
})
export class CatppuccinNixLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
