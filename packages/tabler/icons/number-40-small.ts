import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNumber40SmallIcon],svg[tabler-number-40-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0M6 8v3a1 1 0 0 0 1 1h3m0-4v8"></svg:path>`,
})
export class TablerNumber40SmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
