import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCarbatteryIcon],svg[whh-carbattery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 768H64q-27 0-45.5-18.5T0 704V256q0-27 18.5-45.5T64 192h896q27 0 45.5 18.5T1024 256v448q0 27-18.5 45.5T960 768M288 448H160q-13 0-22.5 9.5T128 480t9.5 22.5T160 512h128q13 0 22.5-9.5T320 480t-9.5-22.5T288 448m576 0h-32v-32q0-13-9.5-22.5T800 384t-22.5 9.5T768 416v32h-32q-13 0-22.5 9.5T704 480t9.5 22.5T736 512h32v32q0 13 9.5 22.5T800 576t22.5-9.5T832 544v-32h32q13 0 22.5-9.5T896 480t-9.5-22.5T864 448M704 64q0-27 18.5-45.5T768 0h64q26 0 45 18.5T896 64v64H704zm-576 0q0-27 18.5-45.5T192 0h64q26 0 45 18.5T320 64v64H128z"></svg:path>`,
})
export class WhhCarbatteryIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
