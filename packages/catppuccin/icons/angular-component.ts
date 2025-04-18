import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinAngularComponentIcon],svg[catppuccin-angular-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8aadf4" d="m8 1l6.5 2l-1 9.5L8 15l-5.5-2.5l-1-9.5z"></svg:path><svg:path stroke="#cad3f5" d="m4.5 10.5l3.5-7l3.5 7m-5.796-2h4.635"></svg:path></svg:g>`,
})
export class CatppuccinAngularComponentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
