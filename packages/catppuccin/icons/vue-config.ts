import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinVueConfigIcon],svg[catppuccin-vue-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8087a2" d="M11.5 13.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1.75-4l1.75 3l-1.75 3h-3.5L8 12.5l1.75-3z"></svg:path><svg:path stroke="#a6da95" d="M.5.5h4.67L6.5 3.09L7.83.5h4.67l-6 11zm9.47.2L6.5 7.08L3.03.7"></svg:path></svg:g>`,
})
export class CatppuccinVueConfigIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
