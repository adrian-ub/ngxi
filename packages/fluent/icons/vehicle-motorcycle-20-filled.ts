import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVehicleMotorcycle20FilledIcon],svg[fluent-vehicle-motorcycle-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 3a.5.5 0 0 0 0 1h1.132a.5.5 0 0 1 .447.276l1.39 2.78A2 2 0 0 0 12 7h-.646a3.5 3.5 0 0 0-3.13 1.935L7.69 10H4a3 3 0 1 0 2.83 4h1.934a2.5 2.5 0 0 0 2.132-1.195a.5.5 0 0 0 .067-.116l.037-.071l.309-.618h-4.48a3 3 0 0 0-.593-1H12a2 2 0 0 0 1.837-1.208l.393.786a3 3 0 1 0 .894-.448l-.593-1.185Q14.757 9 15 9h1.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H15a2 2 0 0 0-1.837 1.208l-1.19-2.379A1.5 1.5 0 0 0 10.633 3zm5.187 8.492l.866 1.732a.5.5 0 1 0 .894-.448l-.866-1.732Q15.784 11 16 11a2 2 0 1 1-1.313.492M14 7a1 1 0 0 1 1-1h1v2h-1a1 1 0 0 1-1-1M2 13a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class FluentVehicleMotorcycle20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
