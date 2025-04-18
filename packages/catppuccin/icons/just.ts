import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinJustIcon],svg[catppuccin-just-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8" cy="8" r="6.5" fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="8" cy="5" r="1.5" fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="8" cy="11" r="1.5" fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class CatppuccinJustIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
