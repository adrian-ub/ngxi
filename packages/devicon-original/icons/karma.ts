import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalKarmaIcon],svg[devicon-original-karma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#409B83" d="m77.281 89.582l19.625 37.84h31.02l-35.153-67.14l-15.492 29.3m-62.535 20.29l14.367-17.497l22.973 35.047l-14.746-70.3l-12.45 26.472l-10.144 26.277"></svg:path><svg:path fill="#56C5A8" d="M14.746 109.871L37.34 57.117L22.977 74.625L0 39.575l14.746 70.296M124.97.391H93.95l-19 36.285V.39H46.492v37.632l15.172 72.282l3.535 17.117h9.75V95.664L124.97.391"></svg:path>`,
})
export class DeviconOriginalKarmaIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
