import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsJuliaIcon],svg[simple-icons-julia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.138 17.569a5.569 5.569 0 1 1-11.138 0a5.569 5.569 0 1 1 11.138 0m6.431-11.138a5.569 5.569 0 1 1-11.138 0a5.569 5.569 0 1 1 11.138 0M24 17.569a5.569 5.569 0 1 1-11.138 0a5.569 5.569 0 1 1 11.138 0"></svg:path>`,
})
export class SimpleIconsJuliaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
