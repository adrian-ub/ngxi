import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCoffeescriptIcon],svg[catppuccin-coffeescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 7c-.5 2.5-2 5.5-3 6.5s-2 1-3 1s-2 0-3.02-1C4.45 12.5 3 9.5 2.5 7c3 2 9 2 12 0m-12-2c3 2 9 2 12 0"></svg:path><svg:path d="M2.5 8.4c-1.73 1.6-1.26 4.17 2 4.1M7 2c-.75-.36-1.5.18-1.5.74c-.01.56.94.78 1.5.75c.6-.03.97-.7 1.5-.96C8.98 2.3 9.41 2 10 2c.56 0 1.52.25 1.5 1c-.01.61-1.12.8-1.5.49"></svg:path></svg:g>`,
})
export class CatppuccinCoffeescriptIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
