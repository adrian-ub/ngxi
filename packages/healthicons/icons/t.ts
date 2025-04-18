import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTIcon],svg[healthicons-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 12a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4h-6v22a2 2 0 1 1-4 0V14h-6a2 2 0 0 1-2-2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
