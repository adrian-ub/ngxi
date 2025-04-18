import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGradienterIcon],svg[tabler-gradienter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.227 14c.917 4 4.497 7 8.773 7c4.277 0 7.858-3 8.773-7m.007-4A9 9 0 0 0 12 3a8.985 8.985 0 0 0-8.782 7"></svg:path><svg:path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path></svg:g>`,
})
export class TablerGradienterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
