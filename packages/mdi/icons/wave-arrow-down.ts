import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWaveArrowDownIcon],svg[mdi-wave-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2V7h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0C17.22 6.53 18.61 7 20 7m-8 15l-4-4h3v-7h2v7h3z"></svg:path>`,
})
export class MdiWaveArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
