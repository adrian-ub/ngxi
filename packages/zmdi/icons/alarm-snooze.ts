import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAlarmSnoozeIcon],svg[zmdi-alarm-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m125 32l-97 82L0 82L98 0zm302 50l-28 33l-98-83l28-32zM213.5 45Q293 45 349 101.5t56 136T349 373t-135.5 56t-136-56T21 237.5t56.5-136t136-56.5m-.5 342q62 0 106-44t44-106t-44-105.5T213 88t-105.5 43.5T64 237t43.5 106T213 387m-64-192v-43h128v38l-77 90h77v43H149v-39l78-89z"></svg:path>`,
})
export class ZmdiAlarmSnoozeIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
