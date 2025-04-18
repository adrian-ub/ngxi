import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinVueIcon],svg[catppuccin-vue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1 1.5h5.44L8 4.56L9.56 1.5H15l-6.99 13z"></svg:path><svg:path d="M12.05 1.73L8 9.28L3.95 1.73"></svg:path></svg:g>`,
})
export class CatppuccinVueIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
