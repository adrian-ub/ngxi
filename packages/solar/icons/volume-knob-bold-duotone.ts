import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarVolumeKnobBoldDuotoneIcon],svg[solar-volume-knob-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 7.056a5.001 5.001 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM13 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M20.5 13a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.696 5.282a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415" opacity=".7"></svg:path><svg:path fill="currentColor" d="M18.718 17.303a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415" opacity=".4"></svg:path><svg:path fill="currentColor" d="M18.718 6.697a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415" opacity=".7"></svg:path><svg:path fill="currentColor" d="M6.696 18.718a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415" opacity=".4"></svg:path>`,
})
export class SolarVolumeKnobBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
