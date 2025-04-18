import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinJavaAlt1Icon],svg[catppuccin-java-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M10.73 8.41c.57 3 1.59 5.83 2.77 7.09c-6.63-3.45-9.76-1.75-10.5 0c-.66-3.4-.54-5.74.09-7.78"></svg:path><svg:path stroke="#a6da95" d="M8.5 7c.63.34 1.82 1.07 2.24 1.41c-.54-2.9-.64-5.96-.74-7.91c-2.13.58-5.73 1.98-6.9 7.22c.52-.69 1.72-1.05 2.4-1.22"></svg:path><svg:path stroke="#a6da95" d="M5.5 7A1.5 1.5 0 0 0 7 8.5A1.5 1.5 0 0 0 8.5 7A1.5 1.5 0 0 0 7 5.5A1.5 1.5 0 0 0 5.5 7"></svg:path></svg:g>`,
})
export class CatppuccinJavaAlt1Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
