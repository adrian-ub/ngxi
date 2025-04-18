import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinSvelteConfigIcon],svg[catppuccin-svelte-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#f5a97f" d="M9.92 5.32s1.26-1.83.07-3.58C8.79 0 6.8.6 6.8.6s-3 1.6-4.65 2.75C.88 4.28.13 5.44 1.23 7.39C2.33 9.33 5.39 8.5 5.39 8.5m-4.3-.82S-.19 9.51 1 11.26C2.21 13 4.2 12.4 4.2 12.4s1.76-.94 3.32-1.9m2.79-3a3.36 3.36 0 0 0-.53-1.89C8.67 3.67 5.61 4.5 5.61 4.5M3.96 5.54l3.76-2.36M3.25 9.87L7 7.5"></svg:path><svg:path stroke="#8087a2" d="M11.5 13.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1.75-4l1.75 3l-1.75 3h-3.5L8 12.5l1.75-3z"></svg:path></svg:g>`,
})
export class CatppuccinSvelteConfigIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
