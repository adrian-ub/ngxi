import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faRetweetIcon],svg[fa-retweet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 1248q0 13-9.5 22.5t-22.5 9.5H288q-8 0-13.5-2t-9-7t-5.5-8t-3-11.5t-1-11.5V640H64q-26 0-45-19T0 576q0-24 15-41l320-384q19-22 49-22t49 22l320 384q15 17 15 41q0 26-19 45t-45 19H512v384h576q16 0 25 11l160 192q7 10 7 21m640-416q0 24-15 41l-320 384q-20 23-49 23t-49-23l-320-384q-15-17-15-41q0-26 19-45t45-19h192V384H832q-16 0-25-12L647 180q-7-9-7-20q0-13 9.5-22.5T672 128h960q8 0 13.5 2t9 7t5.5 8t3 11.5t1 11.5v600h192q26 0 45 19t19 45"></svg:path>`,
})
export class FaRetweetIcon {
  readonly viewBox = input("0 0 1920 1280")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
