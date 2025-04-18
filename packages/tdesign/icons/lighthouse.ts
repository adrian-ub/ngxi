import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLighthouseIcon],svg[tdesign-lighthouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v1h6V1h2v9c0 2.393.482 5.311.978 7.669a71 71 0 0 0 .962 3.982l.016.057l.004.014v.003L19.326 23H13.22l-1-4h-.439l-1 4H4.674l.364-1.275l.001-.003l.004-.014l.016-.057l.062-.224a71 71 0 0 0 .9-3.758C6.517 15.311 7 12.393 7 10V1zm0 6.002V10c0 2.607-.518 5.689-1.022 8.081A73 73 0 0 1 7.3 21h1.92l1-4h3.561l1 4H16.7a74 74 0 0 1-.678-2.919C15.517 15.689 15 12.607 15 10V7.002zM15 5V4H9v1zm-4 3.998h2.004v2.004H11z"></svg:path>`,
})
export class TdesignLighthouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
