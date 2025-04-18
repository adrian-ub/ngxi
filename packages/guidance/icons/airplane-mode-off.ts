import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceAirplaneModeOffIcon],svg[guidance-airplane-mode-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m.5.5l23 23m-8.999-8.999c3.74.043 8.999.999 8.999.999v-2.25S18 10.5 14.25 9.5V4.211c0-.79-.23-1.565-.707-2.194A15 15 0 0 0 12.25.5h-.5a15 15 0 0 0-1.293 1.517c-.478.629-.707 1.404-.707 2.194V9.5l-.196.054m4.33 7.83A46 46 0 0 0 13.75 21s1.25.75 2.25 1.75v.5S13.75 23 12 23s-4 .25-4 .25v-.5c1-1 2.25-1.75 2.25-1.75c0-4.22-.5-6.5-.5-6.5c-3.75 0-9.25 1-9.25 1v-2.25s3.232-1.616 6.43-2.82"></svg:path>`,
})
export class GuidanceAirplaneModeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
