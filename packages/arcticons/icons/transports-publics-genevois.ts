import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTransportsPublicsGenevoisIcon],svg[arcticons-transports-publics-genevois-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.125 11.375h5.75C33.848 11.375 39.5 17.027 39.5 24h0c0 6.973-5.652 12.625-12.625 12.625h-5.75C14.152 36.625 8.5 30.973 8.5 24h0c0-6.973 5.652-12.625 12.625-12.625m5.75 0H43.5m-22.375 25.25H4.5"></svg:path>`,
})
export class ArcticonsTransportsPublicsGenevoisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
