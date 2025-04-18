import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLightningBoldDuotoneIcon],svg[solar-lightning-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="solarLightningBoldDuotone0" fill="currentColor" d="M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4c-2.263 0-3.394 0-4.097-.692C6 18.615 6 17.5 6 15.273v-2.546c0-2.228 0-3.342.703-4.035C7.406 8 8.537 8 10.8 8m1.8 4.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12z"></svg:path></svg:defs><svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:use href="#solarLightningBoldDuotone0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path fill="currentColor" d="M10.25 4.75A.75.75 0 0 1 11 4h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"></svg:path><svg:use href="#solarLightningBoldDuotone0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path fill="currentColor" d="M8.5 5.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C9.893 2 10.596 2 12 2s2.107 0 2.611.337a2 2 0 0 1 .552.552c.337.504.337 1.207.337 2.611v2.55C14.898 8 14.148 8 13.2 8h-2.4c-.948 0-1.697 0-2.3.05z" opacity=".5"></svg:path>`,
})
export class SolarLightningBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
