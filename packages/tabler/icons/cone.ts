import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerConeIcon],svg[tabler-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 17.998v-.5l-8.13-14.99a1 1 0 0 0-1.74 0L3 17.497v.5C3 19.656 7.03 21 12 21s9-1.344 9-3.002"></svg:path>`,
})
export class TablerConeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
