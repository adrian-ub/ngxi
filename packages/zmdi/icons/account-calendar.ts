import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountCalendarIcon],svg[zmdi-account-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 48q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h21V5h43v43h170V5h43v43zm-149 64q-27 0-45.5 18.5T128 176t18.5 45.5T192 240t45.5-18.5T256 176t-18.5-45.5T192 112m128 256v-21q0-20-23.5-36T244 288t-52-7t-52 7t-52.5 23T64 347v21z"></svg:path>`,
})
export class ZmdiAccountCalendarIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
