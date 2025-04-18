import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBezierCurveIcon],svg[ph-bezier-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.07 144.41A96.68 96.68 0 0 0 181 88h59a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H16a8 8 0 0 0 0 16h59a96.68 96.68 0 0 0-40.07 56.41A32 32 0 1 0 51.08 146A80.6 80.6 0 0 1 99 93.44a32 32 0 0 0 58.06 0A80.6 80.6 0 0 1 204.92 146a32 32 0 1 0 16.15-1.57ZM56 176a16 16 0 1 1-16-16a16 16 0 0 1 16 16m72-80a16 16 0 1 1 16-16a16 16 0 0 1-16 16m88 96a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhBezierCurveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
