import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftOnedriveIcon],svg[arcticons-microsoft-onedrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.84 36.77a8.66 8.66 0 0 0 1.5-17.18a12.75 12.75 0 0 0-22.33-3a10.12 10.12 0 0 0 .62 20.22ZM14.01 16.55l28.1 16.26m-5.77-13.22L6.6 32.81"></svg:path>`,
})
export class ArcticonsMicrosoftOnedriveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
