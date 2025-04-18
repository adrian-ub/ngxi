import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinClojureIcon],svg[catppuccin-clojure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#a6da95" d="M14.17 10.03A6.5 6.5 0 0 1 1.81 6.02"></svg:path><svg:path stroke="#8aadf4" d="M1.87 5.85A6.5 6.5 0 0 1 14.22 9.9"></svg:path><svg:path stroke="#a6da95" d="M6.36 4.9a3.5 3.5 0 1 0 3.41 6.12"></svg:path><svg:path stroke="#8aadf4" d="M9.77 11.02a3.5 3.5 0 0 0-3.03-6.29"></svg:path><svg:path stroke="#cad3f5" d="M8 7.5s-1.66 2.48-1.5 3.65"></svg:path><svg:path stroke="#cad3f5" d="M1.81 6.02C2.47 5 3.83 4.49 5 4.46c4.06 0 3 5.56 5.03 6.86c1.21.52 3.5-.21 4.15-1.32"></svg:path></svg:g>`,
})
export class CatppuccinClojureIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
