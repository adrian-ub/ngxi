import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMobileClinic24pxIcon],svg[healthicons-mobile-clinic-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3a1 1 0 0 0-1 1v14h2.05q-.05.243-.05.5a2.5 2.5 0 1 0 4.95-.5h6.1q-.05.243-.05.5a2.5 2.5 0 1 0 4.95-.5H22v-4.764c0-.31-.072-.617-.211-.894L20.17 9.106A2 2 0 0 0 18.382 8H16V4a1 1 0 0 0-1-1zm14.5 13H20v-2h-4v2zM14 16H4v-2h10zm5.382-4l-1-2H16v2zM8 7.5V6h2v1.5h1.5v2H10V11H8V9.5H6.5v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMobileClinic24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
