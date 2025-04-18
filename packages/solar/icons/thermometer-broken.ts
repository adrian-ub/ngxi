import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarThermometerBrokenIcon],svg[solar-thermometer-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m17.096 10l1.3 1.3m-4.5 1.9l1.3 1.3m-4.51 1.909l1.301 1.3M13.303 5l.82-.82a4.028 4.028 0 1 1 5.697 5.696l-8.942 8.943a3.02 3.02 0 0 1-2.47.866l-.8-.089a2.01 2.01 0 0 0-1.646.578l-.383.384a1.51 1.51 0 1 1-2.137-2.137l.384-.383a2.01 2.01 0 0 0 .578-1.647l-.09-.799a3.02 3.02 0 0 1 .867-2.47L10.303 8"></svg:path><svg:path d="m9 15l6.5-6.5"></svg:path></svg:g>`,
})
export class SolarThermometerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
