import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNiconicoLiveIcon],svg[arcticons-niconico-live-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.292 9.438a4.94 4.94 0 0 1-4.944 4.937a4.94 4.94 0 0 1-4.945-4.937h0A4.94 4.94 0 0 1 21.348 4.5h0a4.94 4.94 0 0 1 4.944 4.938M10.758 20.31h16.98a9.476 9.476 0 0 1 9.504 9.49v4.21a9.476 9.476 0 0 1-9.504 9.49h-16.98m10.59-29.125v5.933"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.706 27.207c.948 0 1.71.761 1.71 1.708s-.762 1.708-1.71 1.708s-1.71-.762-1.71-1.708s.762-1.708 1.71-1.708m-5.381 9.852h-4.53l2.265-2.556zM13.16 29.463c.948 0 1.71.762 1.71 1.708s-.762 1.709-1.71 1.709s-1.71-.762-1.71-1.709s.762-1.708 1.71-1.708"></svg:path>`,
})
export class ArcticonsNiconicoLiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
