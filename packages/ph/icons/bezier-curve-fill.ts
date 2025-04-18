import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBezierCurveFillIcon],svg[ph-bezier-curve-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221 144.4A96.26 96.26 0 0 0 181 88h59a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H16a8 8 0 0 0 0 16h59a96.26 96.26 0 0 0-40 56.4A32 32 0 1 0 71 184h114a32 32 0 1 0 36-39.6M40 192a16 16 0 1 1 16-16a16 16 0 0 1-16 16m88-128a16 16 0 1 1-16 16a16 16 0 0 1 16-16m88 128a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhBezierCurveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
