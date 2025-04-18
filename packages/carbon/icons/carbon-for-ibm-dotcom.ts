import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCarbonForIbmDotcomIcon],svg[carbon-carbon-for-ibm-dotcom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.509 17.689l-6-3.55a1 1 0 0 0-1.018.001l-6 3.55a1 1 0 0 0-.491.86v6.9c0 .354.187.681.491.86l6 3.55a.99.99 0 0 0 1.018 0l6-3.55a1 1 0 0 0 .491-.86v-6.9a1 1 0 0 0-.491-.861M28 24.88l-5 2.958l-5-2.958v-5.76l5-2.958l5 2.958z"></svg:path><svg:circle cx="6" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 2H4c-1.103 0-2 .897-2 2v20c0 1.103.897 2 2 2h9v-2H4V10h24v4h2V4c0-1.103-.897-2-2-2M4 8V4h24v4z"></svg:path>`,
})
export class CarbonCarbonForIbmDotcomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
