import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHemisphereIcon],svg[tabler-hemisphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 9a9 3 0 1 0 18 0A9 3 0 1 0 3 9"></svg:path><svg:path d="M3 9a9 9 0 0 0 18 0"></svg:path></svg:g>`,
})
export class TablerHemisphereIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
