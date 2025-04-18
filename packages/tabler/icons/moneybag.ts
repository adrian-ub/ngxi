import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoneybagIcon],svg[tabler-moneybag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.5 3h5A1.5 1.5 0 0 1 16 4.5A3.5 3.5 0 0 1 12.5 8h-1A3.5 3.5 0 0 1 8 4.5A1.5 1.5 0 0 1 9.5 3"></svg:path><svg:path d="M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4"></svg:path></svg:g>`,
})
export class TablerMoneybagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
