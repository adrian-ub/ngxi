import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextUnderline24RegularIcon],svg[fluent-text-underline-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 19h10.5a.75.75 0 0 1 .102 1.493l-.102.007H6.75a.75.75 0 0 1-.102-1.493zh10.5zm10.5-15a.75.75 0 0 1 .743.648L18 4.75v6c0 4.394-2.063 6.75-6.003 6.75c-3.855 0-5.91-2.255-5.994-6.466L6 10.75v-6a.75.75 0 0 1 1.493-.102l.007.102v6C7.496 14.358 8.933 16 11.997 16c2.985 0 4.428-1.56 4.5-4.976l.003-.274v-6a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentTextUnderline24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
