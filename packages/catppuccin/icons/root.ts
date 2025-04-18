import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinRootIcon],svg[catppuccin-root-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:circle cx="11.5" cy="12" r="3"></svg:circle><svg:circle cx="11.5" cy="12" r=".5"></svg:circle></svg:g>`,
})
export class CatppuccinRootIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
