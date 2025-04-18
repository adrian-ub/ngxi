import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEarHearingIcon],svg[streamline-ear-hearing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.54 3.19C.854 2.292 2.09.5 4.517.5c3.035 0 4.777 2.58 4.245 4.995c-.46 2.094-1.767 2.824-2.343 3.323c-.842.73-.842 1.325-1.147 2.288c-.177.557-.79 1.351-1.646 1.45c-.62.07-1.365-.225-2.164-1.24M13.5 9.786A3.714 3.714 0 0 1 9.786 13.5m1.997-3.784a1.997 1.997 0 0 1-1.997 1.997m.336-2.553a.93.93 0 0 1-.928.928"></svg:path><svg:path d="M2.346 4.496c.182-.45.83-1.326 1.97-1.24c1.14.085 2.118 1.24 1.715 2.31c-.404 1.072-.937.74-1.422 1.46c-.485.721-.304 2.167-1.383 2.383c-.672.134-1.026-.252-1.026-.252"></svg:path></svg:g>`,
})
export class StreamlineEarHearingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
