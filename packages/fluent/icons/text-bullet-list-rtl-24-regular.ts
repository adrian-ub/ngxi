import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListRtl24RegularIcon],svg[fluent-text-bullet-list-rtl-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.75 17.5a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499m-3.5.5H2.75a.75.75 0 0 0-.102 1.493l.102.007h14.5a.75.75 0 0 0 .102-1.493zm3.5-7a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499m-3.5.5H2.75a.75.75 0 0 0-.102 1.493L2.75 13h14.5a.75.75 0 0 0 .102-1.493zm3.5-7a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499m-3.5.5H2.75a.75.75 0 0 0-.102 1.493l.102.007h14.5a.75.75 0 0 0 .102-1.493z"></svg:path>`,
})
export class FluentTextBulletListRtl24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
