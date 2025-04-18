import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconReflexIcon],svg[devicon-reflex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#664ec6" d="M0 64V0h128v128H0Zm48.1 23.783V71.08h32.067V55.582H48.1V39.015h31.8v16.033h16.3v-31.8H31.8v81.236h16.3zm48.1.267V71.616H79.9v32.868h16.3z"></svg:path><svg:path fill="#faf8ff" d="M32.066 23.516v80.701h15.766V70.814H79.9V55.85H47.832V38.748h32.336v16.033h15.766V23.516zm48.102 48.367v32.334h15.766V71.883z"></svg:path>`,
})
export class DeviconReflexIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
