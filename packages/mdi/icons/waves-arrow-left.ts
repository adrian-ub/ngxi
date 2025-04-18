import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWavesArrowLeftIcon],svg[mdi-waves-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33h2v2h-2c-1.37 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.62 1-4 1H2v-2zm4 4.67c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33h2v2h-2c-1.37 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.62 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33M6 10V7h5V5H6V2L2 6"></svg:path>`,
})
export class MdiWavesArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
