import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCoinIcon],svg[system-uicons-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 9.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3z"></svg:path><svg:path d="M10.5 12.484c3.866 0 7-1.606 7-2.986S14.366 6.5 10.5 6.5s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986"></svg:path></svg:g>`,
})
export class SystemUiconsCoinIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
