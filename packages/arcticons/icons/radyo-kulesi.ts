import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRadyoKulesiIcon],svg[arcticons-radyo-kulesi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.073 24.595a15.28 15.28 0 0 1 0-19.094m23.854 19.093a15.28 15.28 0 0 0 0-19.094M17.509 21.988a9.5 9.5 0 0 1-.002-13.877M30.49 21.988a9.5 9.5 0 0 0 .002-13.877"></svg:path><svg:circle cx="24" cy="15.048" r="3.259" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.39 42.5l10.204-24.217M34.61 42.5L24.406 18.283m3.346 8.528l-8.911 3.22l12.382 4.721l-16.45 4.584"></svg:path>`,
})
export class ArcticonsRadyoKulesiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
