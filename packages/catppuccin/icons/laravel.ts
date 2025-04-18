import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinLaravelIcon],svg[catppuccin-laravel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.51 5.49v3.29M9.64 3.89l2.86 1.6l2.74-1.53M6.5 12v3.5m-3-12l3-1.5"></svg:path><svg:path d="m3.5 10.5l6-3.5V3.5L12.51 2l2.99 1.5V7l-3.06 1.5L9.5 7"></svg:path><svg:path d="m.5 2l3-1.5l3 1.5v6.5"></svg:path><svg:path d="M.5 2v10.17l6 3.33l6.02-3.41V8.5L6.5 12.04l-3-1.54v-7z"></svg:path></svg:g>`,
})
export class CatppuccinLaravelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
