import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSearch20RegularIcon],svg[fluent-table-search-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v3.757a4.5 4.5 0 0 1 1-.23V8h3v1.759a4.5 4.5 0 0 1 1 .913V8h4v4H8.742a4.5 4.5 0 0 1 .23 1H12v3H9.122l1 1H14.5a2.5 2.5 0 0 0 2.5-2.5zM14.5 16H13v-3h3v1.5l-.007.145A1.5 1.5 0 0 1 14.5 16M13 8h3v4h-3zm-1-1H8V4h4zm1-3h1.5l.145.007A1.5 1.5 0 0 1 16 5.5V7h-3zM4 7V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H7v3zm-2.616 4.905A3.5 3.5 0 0 0 6.6 16.3l2.543 2.558a.5.5 0 0 0 .707-.708L7.3 15.6a3.5 3.5 0 1 0-5.916-3.695m5.194.206a2.5 2.5 0 1 1-4.157 2.778a2.5 2.5 0 0 1 4.157-2.778"></svg:path>`,
})
export class FluentTableSearch20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
