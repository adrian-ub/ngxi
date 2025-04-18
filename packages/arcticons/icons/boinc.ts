import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBoincIcon],svg[arcticons-boinc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="8.57" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 5.5l7.33 7.33m19.59-2.19a15.81 15.81 0 0 0-19.59 2.19m24.53 19.59a15.81 15.81 0 0 0-2.19-19.59h0L42.5 5.5M15.58 37.36a15.81 15.81 0 0 0 19.59-2.19h0l7.33 7.33M10.64 15.58a15.81 15.81 0 0 0 2.19 19.59h0L5.5 42.5"></svg:path>`,
})
export class ArcticonsBoincIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
