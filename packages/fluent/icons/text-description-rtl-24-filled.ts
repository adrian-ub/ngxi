import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDescriptionRtl24FilledIcon],svg[fluent-text-description-rtl-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17H9a1 1 0 0 0-.117 1.993L9 19h12a1 1 0 0 0 .117-1.993zH9zm0-4H3a1 1 0 0 0-.117 1.993L3 15h18a1 1 0 0 0 .117-1.993zH3zm0-4H3a1 1 0 0 0-.117 1.993L3 11h18a1 1 0 0 0 .117-1.993zH3zm0-4H3a1 1 0 0 0-.117 1.993L3 7h18a1 1 0 0 0 .117-1.993zH3z"></svg:path>`,
})
export class FluentTextDescriptionRtl24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
