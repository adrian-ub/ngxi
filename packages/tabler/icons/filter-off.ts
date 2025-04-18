import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFilterOffIcon],svg[tabler-filter-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h12v2.172a2 2 0 0 1-.586 1.414L15.5 11.5M15 15v4l-6 2v-8.5L4.52 7.572A2 2 0 0 1 4 6.227V4M3 3l18 18"></svg:path>`,
})
export class TablerFilterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
