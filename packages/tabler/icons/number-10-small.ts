import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNumber10SmallIcon],svg[tabler-number-10-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h1v8m5-6v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0"></svg:path>`,
})
export class TablerNumber10SmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
