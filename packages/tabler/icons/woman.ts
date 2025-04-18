import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWomanIcon],svg[tabler-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16v5m4-5v5m-6-5h8l-2-7h-4zm-3-5q2.5-2 5-2m9 2q-2.5-2-5-2m-4-5a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path>`,
})
export class TablerWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
