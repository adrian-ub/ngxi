import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitbitHourlyActivitySharpIcon],svg[material-symbols-fitbit-hourly-activity-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 13l-4-.05V11h1.8q-.25-1.225-.775-2.313t-1.3-2.012L17 8.4L15.6 7l1.725-1.75q-1.3-1.075-2.913-1.663T11 3V1q2.5 0 4.688.938T19.5 4.513q1.625 1.637 2.563 3.825T23 13Zm-7.625.4l-2-6L10 8.225v-2.9L7.175 3.65L1.65 11h5.225l11.8 10.6l.525-4.375l-3.825-3.825ZM11.55 22h4.55l-9.975-9H1.65l9.9 9Z"></svg:path>`,
})
export class MaterialSymbolsFitbitHourlyActivitySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
