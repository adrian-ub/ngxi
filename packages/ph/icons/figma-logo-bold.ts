import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoBoldIcon],svg[ph-figma-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.15 96A44 44 0 0 0 168 20H96a44 44 0 0 0-30.15 76a43.9 43.9 0 0 0 1.23 65.12A48 48 0 1 0 148 196v-28.83A44 44 0 0 0 198.15 96M188 64a20 20 0 0 1-20 20h-20V44h20a20 20 0 0 1 20 20M76 64a20 20 0 0 1 20-20h28v40H96a20 20 0 0 1-20-20m20 84a20 20 0 0 1 0-40h28v40zm28 48a24 24 0 1 1-24-24h24Zm44-48a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhFigmaLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
