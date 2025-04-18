import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleThinIcon],svg[ph-link-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.84 93.16a4 4 0 0 1 0 5.66l-64 64a4 4 0 0 1-5.66-5.66l64-64a4 4 0 0 1 5.66 0m49.95-49.95a52.07 52.07 0 0 0-73.56 0l-30.06 30.06a4 4 0 0 0 5.65 5.66l30.07-30.06a44 44 0 0 1 62.24 62.24l-30.07 30.06a4 4 0 0 0 5.66 5.66l30.07-30.06a52.07 52.07 0 0 0 0-73.56m-71.62 133.85l-30.06 30.07a44 44 0 0 1-62.24-62.24l30.06-30.06a4 4 0 0 0-5.66-5.66l-30.06 30.06a52 52 0 0 0 73.56 73.56l30.06-30.07a4 4 0 1 0-5.66-5.66"></svg:path>`,
})
export class PhLinkSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
