import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHospitalIcon],svg[tdesign-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v2h-1v4h3v14H2V8h3V4H4zm3 2v6H4v10h5v-6h6v6h5V10h-3V4zm6 16v-4h-2v4zm0-15v2h2v2h-2v2h-2V9H9V7h2V5z"></svg:path>`,
})
export class TdesignHospitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
