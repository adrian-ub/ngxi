import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLecternLightIcon],svg[ph-lectern-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.51 121.74l-40-80A13.92 13.92 0 0 0 192 34H64a13.92 13.92 0 0 0-12.52 7.74l-40 80A14 14 0 0 0 24 142h98v68H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-68h98a14 14 0 0 0 12.52-20.26Zm-10.82 7.31a1.93 1.93 0 0 1-1.7.95H24a2 2 0 0 1-1.79-2.89l40-80A2 2 0 0 1 64 46h128a2 2 0 0 1 1.79 1.11l40 80a2 2 0 0 1-.1 1.94M190 104a6 6 0 0 1-6 6H72a6 6 0 0 1 0-12h112a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhLecternLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
