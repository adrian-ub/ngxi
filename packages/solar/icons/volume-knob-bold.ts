import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarVolumeKnobBoldIcon],svg[solar-volume-knob-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 7.056a5.001 5.001 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM13 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415m12.02 12.021a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415m0-10.606a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415M6.697 18.718a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415"></svg:path>`,
})
export class SolarVolumeKnobBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
