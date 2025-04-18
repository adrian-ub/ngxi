import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMagniferBugLineDuotoneIcon],svg[solar-magnifer-bug-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarMagniferBugLineDuotone0"><svg:g fill="none" stroke-width="1.5"><svg:circle cx="11.5" cy="11.5" r="9.5" stroke="gray"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M11.5 15.5a3 3 0 0 1-3-3v-2m3 5a3 3 0 0 0 3-3v-2m-3 5v-5m3 0a3 3 0 1 0-6 0m6 0h-6m6.072 1H16m-9 0h1.5m6 2.5l1 .5m-7-.5l-1 .5m7-5.5l1-.5m-7 .5l-1-.5m11 10L22 22"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarMagniferBugLineDuotone0)"></svg:path>`,
})
export class SolarMagniferBugLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
