import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinLuauIcon],svg[catppuccin-luau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#91d7e3" stroke-linejoin="round" d="M4.289 1.5L14.5 4.245L11.777 14.5L1.5 11.711Z"></svg:path><svg:path fill="none" stroke="#cad3f5" stroke-linejoin="round" d="m9.2 5l-.7 2.8l2.8.7l.7-2.8z"></svg:path>`,
})
export class CatppuccinLuauIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
