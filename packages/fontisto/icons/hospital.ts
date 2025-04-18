import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoHospitalIcon],svg[fontisto-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.962 0H2.036A2.037 2.037 0 0 0 0 2.036v19.928C0 23.088.912 24 2.036 24h19.929A2.035 2.035 0 0 0 24 21.965V2.037A2.036 2.036 0 0 0 21.964.002h-.001zM19.84 18.763h-4.29v-4.66H8.469v4.66h-4.32V5.219h4.32v4.66h7.081v-4.66h4.29z"></svg:path>`,
})
export class FontistoHospitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
