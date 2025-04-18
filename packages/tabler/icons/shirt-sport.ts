import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShirtSportIcon],svg[tabler-shirt-sport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 4l6 2v5h-3v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l6-2a3 3 0 0 0 6 0"></svg:path><svg:path d="M10.5 11H13l-1.5 5"></svg:path></svg:g>`,
})
export class TablerShirtSportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
