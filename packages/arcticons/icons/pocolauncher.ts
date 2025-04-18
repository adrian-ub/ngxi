import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPocolauncherIcon],svg[arcticons-pocolauncher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.49 20a15.51 15.51 0 1 1 10.33 14.63M24 14.83A5.18 5.18 0 1 0 29.18 20A5.19 5.19 0 0 0 24 14.83"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 14.83a10.34 10.34 0 0 1 .53 20.67a15.5 15.5 0 0 0-.53-31"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5A15.53 15.53 0 0 0 8.49 20v18.33a5.17 5.17 0 1 0 10.33 0V20A12.65 12.65 0 0 1 31.45 7.38a12 12 0 0 1 1.7.12a15.45 15.45 0 0 0-9.15-3"></svg:path>`,
})
export class ArcticonsPocolauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
