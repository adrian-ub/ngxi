import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDescriptionRtl24RegularIcon],svg[fluent-text-description-rtl-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 17H8.75a.75.75 0 0 0-.102 1.493l.102.007h12.5a.75.75 0 0 0 .102-1.493zH8.75zm0-4H2.75a.75.75 0 0 0-.102 1.493l.102.007h18.5a.75.75 0 0 0 .102-1.493zH2.75zm0-4H2.75a.75.75 0 0 0-.102 1.493l.102.007h18.5a.75.75 0 0 0 .102-1.493zH2.75zm0-4H2.75a.75.75 0 0 0-.102 1.493l.102.007h18.5a.75.75 0 0 0 .102-1.493zH2.75z"></svg:path>`,
})
export class FluentTextDescriptionRtl24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
