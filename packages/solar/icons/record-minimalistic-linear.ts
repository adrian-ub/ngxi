import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRecordMinimalisticLinearIcon],svg[solar-record-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-12 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path><svg:path stroke-linecap="round" d="M6 16h12"></svg:path></svg:g>`,
})
export class SolarRecordMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
