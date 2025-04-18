import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsTypesIcon],svg[gridicons-types-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17a5 5 0 1 1-10.001-.001A5 5 0 0 1 22 17M6.5 6.5h3.8L7 1L1 11h5.5zm9.5 4.085V8H8v8h2.585A6.505 6.505 0 0 1 16 10.585"></svg:path>`,
})
export class GridiconsTypesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
