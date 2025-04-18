import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCommunicationIcon],svg[healthicons-communication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.5 6C10.492 6 4 12.492 4 20.5C4 38.5 28 42 28 42v-7h1.5C37.508 35 44 28.508 44 20.5S37.508 6 29.5 6zM24 23.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M34.5 21a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M16 23.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsCommunicationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
