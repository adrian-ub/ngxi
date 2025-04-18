import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCongruentToIcon],svg[tabler-congruent-to-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13h14M5 17h14M5 7.686c2.333-2.624 4.667-1.856 7 .064s4.667 2.688 7 .064"></svg:path>`,
})
export class TablerCongruentToIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
