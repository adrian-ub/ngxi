import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBellDisabledIcon],svg[system-uicons-bell-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 15.5H5.415A1.65 1.65 0 0 1 4 13a10.5 10.5 0 0 0 1.5-5.415V6.5c0-.274-.053-.741 0-1m1.363-2.008A4 4 0 0 1 9.5 2.5h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415c.238.397.29.854.181 1.269M17.5 17.5l-14-14M13 17q-1 1.5-2.5 1.5C9 18.5 8.667 18 8 17"></svg:path>`,
})
export class SystemUiconsBellDisabledIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
