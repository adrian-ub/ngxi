import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonImageMedicalIcon],svg[carbon-image-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 6v20H6V6zm0-2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M22 16v-2h-5v-2h3v-2h-3V8h-2v2h-3v2h3v2h-5v2h5v2h-5v2h5v2h-3v2h8v-2h-3v-2h5v-2h-5v-2z"></svg:path>`,
})
export class CarbonImageMedicalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
