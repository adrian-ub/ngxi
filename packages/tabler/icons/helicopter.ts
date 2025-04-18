import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHelicopterIcon],svg[tabler-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 10l1 2h6m2-3a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2c0-3.31-3.13-5-7-5zm1 0V6M5 6h15"></svg:path><svg:path d="M15 9.1V13h5.5M15 19v-3m4 3h-8"></svg:path></svg:g>`,
})
export class TablerHelicopterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
