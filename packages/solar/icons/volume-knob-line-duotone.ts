import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarVolumeKnobLineDuotoneIcon],svg[solar-volume-knob-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v4" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M20.5 13a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.415m12.021 12.021a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.415m0-10.606a1 1 0 1 1-1.415-1.415a1 1 0 0 1 1.415 1.415M6.697 18.718a1 1 0 1 1-1.415-1.415a1 1 0 0 1 1.415 1.415" opacity=".5"></svg:path></svg:g>`,
})
export class SolarVolumeKnobLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
