import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasFeatureFlagDisabledIcon],svg[pajamas-feature-flag-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 5v6a3.5 3.5 0 1 1-7 0V5a3.5 3.5 0 1 1 7 0M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0zm5 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class PajamasFeatureFlagDisabledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
