import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListRtl24FilledIcon],svg[fluent-text-bullet-list-rtl-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.504 16.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-4 .5H3a1 1 0 0 0-.117 1.993L3 19h13.503a1 1 0 0 0 .117-1.993zm4-6.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-4 .5H3a1 1 0 0 0-.117 1.993L3 13h13.503a1 1 0 0 0 .117-1.993zm4-6.492a1.5 1.5 0 1 0 0 2.999a1.5 1.5 0 0 0 0-3m-4 .493H3a1 1 0 0 0-.117 1.993L3 7.001h13.503a1 1 0 0 0 .117-1.993z"></svg:path>`,
})
export class FluentTextBulletListRtl24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
