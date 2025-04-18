import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListRtl9020RegularIcon],svg[fluent-text-bullet-list-rtl-90-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 17a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-1-3a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5m5 0a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5m4.5-.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm.5 2.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-4 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class FluentTextBulletListRtl9020RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
