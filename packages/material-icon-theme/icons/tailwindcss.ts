import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTailwindcssIcon],svg[material-icon-theme-tailwindcss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4db6ac" d="M23.5 12H8c.89-2.3 4.02-4 7.75-4s6.86 1.7 7.75 4M14 12h15.5c-.89 2.3-4.02 4-7.75 4s-6.86-1.7-7.75-4m3.5 8H2c.89-2.3 4.02-4 7.75-4s6.86 1.7 7.75 4M8 20h15.5c-.89 2.3-4.02 4-7.75 4S8.89 22.3 8 20"></svg:path>`,
})
export class MaterialIconThemeTailwindcssIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
