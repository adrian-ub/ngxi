import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayStationSolidIcon],svg[streamline-play-station-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.459.09a.75.75 0 0 0-.978.713V5.71q0 .038.003.074l-.003.076v7.355a.75.75 0 0 0 1.5 0V5.86l-.003-.06V2.854a.625.625 0 0 1 1.25 0v4.268l1.376.432l.027.008c.934.255 1.775.088 2.374-.473c.567-.531.801-1.306.807-2.047c.012-1.472-.876-3.237-2.761-3.806L6.459.089ZM4.233 7.845l-2.539 1.15c-.751.292-1.326.75-1.552 1.388c-.235.668-.013 1.312.371 1.775c.743.893 2.23 1.35 3.72.878v-1.615l-.463.189c-.981.307-1.8-.047-2.103-.411c-.141-.17-.126-.272-.11-.316c.024-.068.15-.287.695-.495l.042-.018l1.94-.878V7.846Zm8.017 4.74l-4.022 1.281v-1.574l3.555-1.132c.548-.197.649-.406.663-.45c.01-.03.03-.142-.136-.334c-.349-.404-1.208-.746-2.112-.428l-1.97.72V9.072l1.46-.533l.007-.003c1.473-.52 2.987-.023 3.75.86c.39.452.65 1.097.428 1.78c-.218.668-.821 1.126-1.6 1.402z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePlayStationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
