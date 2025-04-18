import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAlarmcomIcon],svg[arcticons-alarmcom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 30.094V17.906a4 4 0 0 0-2.372-3.654L26.326 7.655a5.7 5.7 0 0 0-4.652 0L6.872 14.252A4 4 0 0 0 4.5 17.906v12.188a4 4 0 0 0 2.372 3.654l14.802 6.597c1.48.66 3.172.66 4.652 0l14.802-6.597a4 4 0 0 0 2.372-3.654"></svg:path><svg:circle cx="33.502" cy="17.184" r="2.218" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.242 28.398L24 16.445L12.759 28.398"></svg:path>`,
})
export class ArcticonsAlarmcomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
