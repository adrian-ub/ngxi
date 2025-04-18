import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarVolumeKnobBrokenIcon],svg[solar-volume-knob-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 12a5 5 0 1 0-5 5m0-10v4"></svg:path><svg:path fill="currentColor" d="M13 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.415m12.021 12.021a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.415m0-10.606a1 1 0 1 1-1.415-1.415a1 1 0 0 1 1.415 1.415M6.697 18.718a1 1 0 1 1-1.415-1.415a1 1 0 0 1 1.415 1.415"></svg:path></svg:g>`,
})
export class SolarVolumeKnobBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
