import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiHospitalJpIcon],svg[maki-hospital-jp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.504 3H2.496A1.005 1.005 0 0 0 1.5 4.013v5.58a1.01 1.01 0 0 0 .55.907l4.78 2.84a1.47 1.47 0 0 0 1.339 0l4.78-2.84a1.01 1.01 0 0 0 .551-.906v-5.58A1 1 0 0 0 12.504 3M10.5 8.5h-2v2h-2v-2h-2v-2h2v-2h2v2h2z"></svg:path>`,
})
export class MakiHospitalJpIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
