import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinApacheIcon],svg[catppuccin-apache-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#ed8796" d="M2.5 14.5a24.3 24.3 0 0 1 1.63-4.36c.21-.42.45-.84.7-1.26c2.75-4.61 6.63-6.8 8.67-7.38c-.8 3.52-3.91 10.46-10.15 10.4"></svg:path><svg:path stroke="#f5a97f" d="M6.14 6.96C8.7 3.64 11.76 1.99 13.5 1.5a18.5 18.5 0 0 1-2.27 5.46"></svg:path><svg:path stroke="#ed8796" d="M6.5 9.5h-2m1.25-2h2.71"></svg:path></svg:g>`,
})
export class CatppuccinApacheIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
