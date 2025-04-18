import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarVolumeKnobOutlineIcon],svg[solar-volume-knob-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 7.816a4.251 4.251 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM6.25 12a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.415m12.021 12.021a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.415m0-10.606a1 1 0 1 1-1.415-1.415a1 1 0 0 1 1.415 1.415M6.697 18.718a1 1 0 1 1-1.415-1.415a1 1 0 0 1 1.415 1.415"></svg:path>`,
})
export class SolarVolumeKnobOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
