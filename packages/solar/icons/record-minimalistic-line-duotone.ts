import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRecordMinimalisticLineDuotoneIcon],svg[solar-record-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 11.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Zm-11 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="M6.5 15h11" opacity=".5"></svg:path></svg:g>`,
})
export class SolarRecordMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
