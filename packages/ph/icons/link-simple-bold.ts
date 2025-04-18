import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBoldIcon],svg[ph-link-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m87.5 151.52l64-64a12 12 0 0 1 17 17l-64 64a12 12 0 0 1-17-17m131-114a60.08 60.08 0 0 0-84.87 0l-30.12 30.09a12 12 0 0 0 17 17l30.07-30.06a36 36 0 0 1 50.93 50.92l-30.11 30.05a12 12 0 1 0 17 17l30.08-30.06a60.09 60.09 0 0 0-.03-84.91ZM135.52 171.4l-30.07 30.08a36 36 0 0 1-50.92-50.93l30.06-30.07a12 12 0 0 0-17-17l-30.04 30.1a60 60 0 0 0 84.88 84.87l30.06-30.07a12 12 0 0 0-17-17Z"></svg:path>`,
})
export class PhLinkSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
