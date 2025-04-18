import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHospitalIcon],svg[carbon-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10h-4V6h-2v4h-4v2h4v4h2v-4h4z"></svg:path><svg:path fill="currentColor" d="M28 10h-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6H4a2 2 0 0 0-2 2v18h28V12a2 2 0 0 0-2-2M14 28v-6h4v6Zm6 0v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7H4V12h4V4h16v8h4v16Z"></svg:path>`,
})
export class CarbonHospitalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
