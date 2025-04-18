import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGrave2Icon],svg[tabler-grave-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 16.17V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v9.171M12 7v5m-2-3h4"></svg:path><svg:path d="M5 21v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2z"></svg:path></svg:g>`,
})
export class TablerGrave2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
