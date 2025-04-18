import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinMsPowerpointIcon],svg[catppuccin-ms-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 3.13c0-.77.86-1.63 1.62-1.63h9.76c.76 0 1.62.86 1.62 1.63v9.75c0 .76-.86 1.62-1.62 1.62H4.13c-.77 0-1.63-.86-1.63-1.62"></svg:path><svg:path d="M7.5 5.8L11.88 8L7.5 10.2zm-7-.3v5m0-2H2a1.5 1.5 0 0 0 0-3H.5"></svg:path></svg:g>`,
})
export class CatppuccinMsPowerpointIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
