import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEqualNotIcon],svg[tabler-equal-not-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10h14M5 14h14M5 19L19 5"></svg:path>`,
})
export class TablerEqualNotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
