import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHttpGetIcon],svg[tabler-http-get-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4H6m8-4h-4v8h4m-4-4h2.5M17 8h4m-2 0v8"></svg:path>`,
})
export class TablerHttpGetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
