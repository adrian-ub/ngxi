import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTransformIcon],svg[tabler-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0m18 5V8a2 2 0 0 0-2-2h-6l3 3m0-6l-3 3M3 13v3a2 2 0 0 0 2 2h6l-3-3m0 6l3-3m4 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path>`,
})
export class TablerTransformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
