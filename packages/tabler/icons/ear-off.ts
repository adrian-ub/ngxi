import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEarOffIcon],svg[tabler-ear-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 10c0-1.146.277-2.245.78-3.219m1.792-2.208A7 7 0 0 1 19 13.6a10 10 0 0 1-.633.762m-2.045 1.96A8 8 0 0 0 15 18.6A4.5 4.5 0 0 1 8.2 20"></svg:path><svg:path d="M11.42 7.414a3 3 0 0 1 4.131 4.13M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerEarOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
