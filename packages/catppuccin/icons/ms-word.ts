import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinMsWordIcon],svg[catppuccin-ms-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 3.13c0-.77.86-1.63 1.62-1.63h9.76c.76 0 1.62.86 1.62 1.63v9.75c0 .76-.86 1.62-1.62 1.62H4.13c-.77 0-1.63-.86-1.63-1.62"></svg:path><svg:path d="m.5 5.5l1 5l1-5l1 5l.97-5m3.03 1h4m-4 3h4"></svg:path></svg:g>`,
})
export class CatppuccinMsWordIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
