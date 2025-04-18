import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSolarpanelIcon],svg[whh-solarpanel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M990.86 703h-281l58 288q3 16-7 24t-25 8h-448q-15 0-24.5-8t-7.5-24l58-288h-281q-16 0-25.5-7.5T.86 671l127-639q2-12 8.5-22t15.5-10h709q10 0 21.5 11t13.5 21l127 639q3 17-6.5 24.5t-25.5 7.5m-159-639h-640l-96 575h831zm-484 320l-28 191h-160l41-191zm264 0l28 191h-256l27-191zm210 0l42 191h-160l-28-191zm-155-64l-27-192h128l41 192zm-246 0l27-192h128l27 192zm-206 0l41-192h128l-27 192z"></svg:path>`,
})
export class WhhSolarpanelIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
