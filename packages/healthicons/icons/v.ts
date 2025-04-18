import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsVIcon],svg[healthicons-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 38a2 2 0 0 0 1.846-1.23l10-24a2 2 0 0 0-3.692-1.54L24 30.8l-8.154-19.57a2 2 0 0 0-3.692 1.54l10 24A2 2 0 0 0 24 38" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
