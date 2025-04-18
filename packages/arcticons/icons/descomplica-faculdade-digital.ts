import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDescomplicaFaculdadeDigitalIcon],svg[arcticons-descomplica-faculdade-digital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.224 11.212L41.776 5.5v37L6.224 35.83Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.75 21.69a6.07 6.07 0 0 0-6.05-6.05h0a6.07 6.07 0 0 0-6.051 6.05v3.934a6.07 6.07 0 0 0 6.05 6.05h0a6.07 6.07 0 0 0 6.051-6.05m-.002 6.049V7.47"></svg:path>`,
})
export class ArcticonsDescomplicaFaculdadeDigitalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
