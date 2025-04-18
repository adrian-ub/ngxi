import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBusOffIcon],svg[tabler-bus-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12.18-.828a2 2 0 0 0 2.652 2.648"></svg:path><svg:path d="M4 17H2V6a1 1 0 0 1 1-1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0H8"></svg:path><svg:path d="m16 5l1.5 7H22M2 10h8m4 0h3M7 7v3m5-5v3M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBusOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
