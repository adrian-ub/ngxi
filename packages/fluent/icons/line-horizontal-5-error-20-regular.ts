import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal5Error20RegularIcon],svg[fluent-line-horizontal-5-error-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h7.757a5.5 5.5 0 0 1 1.08-1zm0 3h6.707a5.5 5.5 0 0 0-.185 1H2.5a.5.5 0 0 1 0-1m0 3h6.707q.149.524.393 1H2.5a.5.5 0 0 1 0-1m0-9a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zM19 13.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M14.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25"></svg:path>`,
})
export class FluentLineHorizontal5Error20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
