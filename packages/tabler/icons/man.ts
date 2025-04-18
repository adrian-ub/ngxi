import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerManIcon],svg[tabler-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16v5m4-5v5M9 9h6l-1 7h-4zm-4 2q2-2 4-2m10 2q-2-2-4-2m-5-5a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path>`,
})
export class TablerManIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
