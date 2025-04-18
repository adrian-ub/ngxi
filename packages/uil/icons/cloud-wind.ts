import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCloudWindIcon],svg[uil-cloud-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18a1 1 0 1 0 1 1a1 1 0 0 0-1-1m14-4h-7a1 1 0 0 0 0 2h7a1 1 0 0 1 0 2a1 1 0 0 0 0 2a3 3 0 0 0 0-6m-5-3a1 1 0 0 0 1 1h4a3 3 0 0 0 3-3a1 1 0 0 0-2 0a1 1 0 0 1-1 1h-4a1 1 0 0 0-1 1m-4 4a1 1 0 0 0-1-1H6a2 2 0 0 1 0-4a1 1 0 0 0 1-1a5 5 0 0 1 9.73-1.61a1 1 0 1 0 1.9-.64A7 7 0 0 0 5.06 8.11A4 4 0 0 0 6 16h3a1 1 0 0 0 1-1m0-4a1 1 0 1 0 1-1a1 1 0 0 0-1 1m4 7H9a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1a1 1 0 0 0 2 0a3 3 0 0 0-3-3"></svg:path>`,
})
export class UilCloudWindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
