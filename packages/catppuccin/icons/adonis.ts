import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinAdonisIcon],svg[catppuccin-adonis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#b7bdf8" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 1.5c5.2 0 6.5 1.3 6.5 6.5s-1.3 6.5-6.5 6.5S1.5 13.2 1.5 8S2.8 1.5 8 1.5"></svg:path><svg:path d="M8 10.89c1.08 0 1.44.36 2.27.66a1 1 0 0 0 1.28-.55a.87.87 0 0 0-.03-.71l-2.68-5.4a.96.96 0 0 0-1.68 0l-2.68 5.4c-.23.47-.01 1.02.5 1.24c.23.1.5.12.75.02c.83-.3 1.19-.66 2.27-.66"></svg:path></svg:g>`,
})
export class CatppuccinAdonisIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
