import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSofaOffIcon],svg[tabler-sofa-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 14v-1a2 2 0 1 1 4 0v5m-3 1H3a1 1 0 0 1-1-1v-5a2 2 0 1 1 4 0v1h8"></svg:path><svg:path d="M4 11V8c0-1.082.573-2.03 1.432-2.558M9 5h8a3 3 0 0 1 3 3v3m-8-6v3m0 4v2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerSofaOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
