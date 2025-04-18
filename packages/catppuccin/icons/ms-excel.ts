import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinMsExcelIcon],svg[catppuccin-ms-excel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 3.13c0-.77.86-1.63 1.62-1.63h9.76c.76 0 1.62.86 1.62 1.63v9.75c0 .76-.86 1.62-1.62 1.62H4.13c-.77 0-1.63-.86-1.63-1.62M.5 5.5l4 5m0-5l-4 5"></svg:path><svg:path d="M7.5 5.5h5v5h-5zm2 0v5m-2-3h5"></svg:path></svg:g>`,
})
export class CatppuccinMsExcelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
