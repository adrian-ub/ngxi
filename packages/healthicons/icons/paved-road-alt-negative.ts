import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoadAltNegativeIcon],svg[healthicons-paved-road-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPavedRoadAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 .04L0 0l-.04 48l48 .04zM12.994 7.97a2 2 0 0 1 2.001-1.998l18 .015a2 2 0 0 1 1.999 2.002l-.027 32a2 2 0 0 1-2.001 1.998l-18-.015a2 2 0 0 1-1.999-2.001zM24.011 10a1 1 0 0 0-1.001 1l-.003 4a1 1 0 1 0 2 0l.003-4a1 1 0 0 0-1-1M24 21a1 1 0 0 0-1 1l-.003 4a1 1 0 1 0 2 0L25 22a1 1 0 0 0-1-1m-1.01 12a1 1 0 0 1 2 0l-.003 4a1 1 0 0 1-2 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPavedRoadAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPavedRoadAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
