import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightness2Icon],svg[zmdi-brightness-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 3q88 0 150.5 62.5T320 216t-62.5 150.5T107 429q-57 0-107-28q49-29 78-78t29-107t-29-107T0 31Q50 3 107 3"></svg:path>`,
})
export class ZmdiBrightness2Icon {
  readonly viewBox = input("0 0 320 432")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
