import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiVideoIcon],svg[arcticons-mi-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.93 42.5a4.06 4.06 0 0 1-2-.53a4 4 0 0 1-2-3.46v-29a4 4 0 0 1 6-3.46l25.13 14.49a4 4 0 0 1 0 6.92L15.93 42a4.07 4.07 0 0 1-2 .5m4-26.1v15.2L31.08 24ZM31.08 24l7.99-4.61m-29.13-7.6l7.99 4.61m0 15.2v9.21"></svg:path>`,
})
export class ArcticonsMiVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
