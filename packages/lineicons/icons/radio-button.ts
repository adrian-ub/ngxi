import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsRadioButtonIcon],svg[lineicons-radio-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.1 4.3c-4 0-7.3 3.3-7.3 7.3S5 19 9.1 19s7.3-3.3 7.3-7.3s-3.3-7.4-7.3-7.4m0 10.2c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8m0 10.2c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3s-3.3-7.3-7.3-7.3m0 10.1c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8m0 10.2c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3S13.1 45 9.1 45m0 10.2c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8m15.3-41.3H60c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H24.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3M60 29.8H24.4c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m0 20.3H24.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsRadioButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
