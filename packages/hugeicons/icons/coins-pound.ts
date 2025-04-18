import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoinsPoundIcon],svg[hugeicons-coins-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1 2.843A7.111 7.111 0 0 1 3.157 11"></svg:path><svg:path d="M16 7.873c-.125-.828-.891-1.607-1.926-1.307c-1.083.314-1.575 1.907-1.083 2.902c.509 1.032.753 2.032.088 3.447c-.129.275-.194.413-.158.5c.036.085.15.085.378.085H16m-4-3.333h3.5"></svg:path></svg:g>`,
})
export class HugeiconsCoinsPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
