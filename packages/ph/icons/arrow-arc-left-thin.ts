import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowArcLeftThinIcon],svg[ph-arrow-arc-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 184a4 4 0 0 1-8 0a92 92 0 0 0-157-65l-29.3 29H88a4 4 0 0 1 0 8H24a4 4 0 0 1-4-4V88a4 4 0 0 1 8 0v54.39l29.3-29.11A100 100 0 0 1 228 184"></svg:path>`,
})
export class PhArrowArcLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
