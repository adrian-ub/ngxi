import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinViteIcon],svg[catppuccin-vite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#c6a0f6" d="m11 5.5l3.5-1l-6.5 11l-6.5-11l3.5 1"></svg:path><svg:path stroke="#eed49f" d="m6 1.5l-.5 5l2-1l-1 3L8 8v3l4-7.5l-2 .5L11.5.5Z"></svg:path></svg:g>`,
})
export class CatppuccinViteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
