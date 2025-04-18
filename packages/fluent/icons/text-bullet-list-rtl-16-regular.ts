import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListRtl16RegularIcon],svg[fluent-text-bullet-list-rtl-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2M14 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-1 3.5a1 1 0 1 0 2 0a1 1 0 0 0-2 0M10.5 3a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm.5 5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9A.5.5 0 0 0 11 8m-.5 4a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z"></svg:path>`,
})
export class FluentTextBulletListRtl16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
