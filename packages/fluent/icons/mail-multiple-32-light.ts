import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailMultiple32LightIcon],svg[fluent-mail-multiple-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 20a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h15a4 4 0 0 1 4 4zM7 6a3 3 0 0 0-3 3v.715l10.5 6.204L25 9.715V9a3 3 0 0 0-3-3zm18 4.876L14.754 16.93a.5.5 0 0 1-.508 0L4 10.876V20a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3zM7.354 26c.705.622 1.631 1 2.646 1h12a7 7 0 0 0 7-7v-7a4 4 0 0 0-1-2.646V20a6 6 0 0 1-6 6z"></svg:path>`,
})
export class FluentMailMultiple32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
