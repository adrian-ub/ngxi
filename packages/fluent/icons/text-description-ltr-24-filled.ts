import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDescriptionLtr24FilledIcon],svg[fluent-text-description-ltr-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17h12a1 1 0 0 1 .117 1.993L15 19H3a1 1 0 0 1-.117-1.993zh12zm0-4h18a1 1 0 0 1 .117 1.993L21 15H3a1 1 0 0 1-.117-1.993zh18zm0-4h18a1 1 0 0 1 .117 1.993L21 11H3a1 1 0 0 1-.117-1.993zh18zm0-4h18a1 1 0 0 1 .117 1.993L21 7H3a1 1 0 0 1-.117-1.993zh18z"></svg:path>`,
})
export class FluentTextDescriptionLtr24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
