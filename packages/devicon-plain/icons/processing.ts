import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainProcessingIcon],svg[devicon-plain-processing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M70.402 4.64v28.77c22.375 0 28.77 11.988 28.77 23.973c0 11.988-6.395 23.976-28.77 23.976v28.766c35.16 0 57.535-26.371 57.535-52.742S105.564 4.64 70.403 4.64ZM58.895 29.575L32.582 64.656L25.73 50.95L0 63.816l13.285 26.57L1.36 106.29l23.012 17.262l57.54-76.715Zm0 0"></svg:path>`,
})
export class DeviconPlainProcessingIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
