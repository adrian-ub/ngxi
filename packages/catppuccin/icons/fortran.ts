import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFortranIcon],svg[catppuccin-fortran-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.5v-1l-1-1v-3h2l1 2h1v-6h-1l-1 2h-2v-4h5l1 3h1v-5h-11v1l1 1v9l-1 1.25v.75z"></svg:path>`,
})
export class CatppuccinFortranIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
