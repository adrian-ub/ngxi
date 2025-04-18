import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHttpDeleteOffIcon],svg[tabler-http-delete-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm11 0h-2m-2 2v6h4m-4-4h2m5-4v5m3 3h1M3 3l18 18"></svg:path>`,
})
export class TablerHttpDeleteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
