import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psCloudappIcon],svg[ps-cloudapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 358h-1h246q49 0 83-34.5t34-83.5t-34-83.5t-83-34.5h-7q-8-41-40-68.5T223 26q-49 0-83.5 34.5T105 144q0 1 .5 2.5t.5 2.5h-1q-43 0-73 30.5T2 254q0 41 28.5 71.5T100 358"></svg:path>`,
})
export class PsCloudappIcon {
  readonly viewBox = input("0 0 464 448")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
