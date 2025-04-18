import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiViewWeekIcon],svg[zmdi-view-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 43q9 0 15.5 6t6.5 15v256q0 9-6.5 15T85 341H21q-8 0-14.5-6T0 320V64q0-9 6.5-15T21 43zm299 0q9 0 15 6t6 15v256q0 9-6 15t-15 6h-64q-9 0-15-6t-6-15V64q0-9 6-15t15-6zm-149 0q8 0 14.5 6t6.5 15v256q0 9-6.5 15t-14.5 6h-64q-9 0-15.5-6t-6.5-15V64q0-9 6.5-15t15.5-6z"></svg:path>`,
})
export class ZmdiViewWeekIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
