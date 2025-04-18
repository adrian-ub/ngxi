import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGenderAgenderIcon],svg[tabler-gender-agender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0m1 0h11"></svg:path>`,
})
export class TablerGenderAgenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
