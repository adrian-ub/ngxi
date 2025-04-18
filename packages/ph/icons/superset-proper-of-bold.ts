import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSupersetProperOfBoldIcon],svg[ph-superset-proper-of-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a92.1 92.1 0 0 1-92 92H64a12 12 0 0 1 0-24h72a68 68 0 0 0 0-136H64a12 12 0 0 1 0-24h72a92.1 92.1 0 0 1 92 92"></svg:path>`,
})
export class PhSupersetProperOfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
