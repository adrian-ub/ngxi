import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPeakIcon],svg[arcticons-peak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.75 5.5a9.25 9.25 0 0 1 0 18.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 14.75h9.25l6.54 6.54a9.25 9.25 0 1 1 2.71-6.54zm0 27.75v-9.25A9.25 9.25 0 0 0 14.75 24a9.25 9.25 0 0 1-9.25 9.25a9.25 9.25 0 0 0 9.25 9.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 33.25A9.25 9.25 0 0 1 33.25 24h9.25a9.25 9.25 0 0 1-9.25 9.25a9.25 9.25 0 0 1 9.25 9.25H14.75v-37H5.5v27.75M33.25 24v18.5"></svg:path>`,
})
export class ArcticonsPeakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
