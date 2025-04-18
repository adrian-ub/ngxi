import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinDenoLockIcon],svg[catppuccin-deno-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8087a2" d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"></svg:path><svg:path stroke="#cad3f5" d="M12.5 6.5a6 6 0 1 0-5 5.92m.17-.92l-.84-3.33C5.07 8.1 3.5 7.08 3.5 5.83C3.5 4.54 5 3.5 6.83 3.5c1.84 0 2.67.67 3.34 2l.62 2m-3.29-2"></svg:path></svg:g>`,
})
export class CatppuccinDenoLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
