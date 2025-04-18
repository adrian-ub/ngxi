import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRestartCircleLineDuotoneIcon],svg[solar-restart-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.978 8.715l-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0a5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"></svg:path></svg:g>`,
})
export class SolarRestartCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
