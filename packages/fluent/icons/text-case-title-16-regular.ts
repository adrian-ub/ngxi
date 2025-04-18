import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextCaseTitle16RegularIcon],svg[fluent-text-case-title-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2.5a.5.5 0 0 1 .47.327l3.5 9.5a.5.5 0 0 1-.939.346L7.046 10H2.954l-.985 2.673a.5.5 0 0 1-.938-.346l3.5-9.5a.5.5 0 0 1 .47-.327m0 1.946L3.322 9h3.356zM10.5 2.5a.5.5 0 0 1 .5.5v4.6c.418-.377.937-.6 1.5-.6c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3c-.563 0-1.082-.223-1.5-.6v.1a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5m2 9.5c.665 0 1.5-.717 1.5-2s-.835-2-1.5-2s-1.5.717-1.5 2s.835 2 1.5 2"></svg:path>`,
})
export class FluentTextCaseTitle16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
