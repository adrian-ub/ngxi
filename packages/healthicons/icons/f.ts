import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsFIcon],svg[healthicons-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 12a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H20v8h10a2 2 0 1 1 0 4H20v10a2 2 0 1 1-4 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsFIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
