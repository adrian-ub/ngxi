import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLocationCancelIcon],svg[tabler-location-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18l-2-4l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.305 9.151M16 19a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1 2l4-4"></svg:path>`,
})
export class TablerLocationCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
