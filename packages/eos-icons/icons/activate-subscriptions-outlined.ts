import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsActivateSubscriptionsOutlinedIcon],svg[eos-icons-activate-subscriptions-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.004 5.999h16v2h-16zm2-3.999h12v2h-12zm13.993 7.991H5.003A2.01 2.01 0 0 0 3 12.004v7.974a2.01 2.01 0 0 0 2.003 2.013h15.994A2.01 2.01 0 0 0 23 19.978v-7.974a2.01 2.01 0 0 0-2.003-2.013M21 20H5v-8h16Z"></svg:path><svg:path fill="currentColor" d="M12.004 18.991h2v-1.989h2v-2.004h-2v-2.007h-2v2.01h-2v2.001h2z"></svg:path>`,
})
export class EosIconsActivateSubscriptionsOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
