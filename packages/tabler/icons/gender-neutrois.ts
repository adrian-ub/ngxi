import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGenderNeutroisIcon],svg[tabler-gender-neutrois-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 0V3"></svg:path>`,
})
export class TablerGenderNeutroisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
