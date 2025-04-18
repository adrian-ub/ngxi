import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileHorizontalIcon],svg[tabler-file-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 5v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7l-5-5H5a2 2 0 0 0-2 2"></svg:path></svg:g>`,
})
export class TablerFileHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
