import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCabalIcon],svg[catppuccin-cabal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#7dc4e4" d="M5 1.5L9 8l6.5-1L11 .5z"></svg:path><svg:path stroke="#b7bdf8" d="m9 10l6.5-1l-4 5.5l-6.5 1z"></svg:path><svg:path stroke="#8aadf4" d="m2.1 5.075l1.694 1.476l1.901-.495l-.43 2.483l1.073 2.267l-1.96.058l-1.237 1.896l-.78-2.447L.52 9.217L2 7.647z"></svg:path></svg:g>`,
})
export class CatppuccinCabalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
