import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFirstQuarterMoonIcon],svg[fluent-emoji-flat-first-quarter-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FCD53F" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2l-2 14z"></svg:path><svg:path fill="#533566" d="M16 30V2C8.268 2 2 8.268 2 16s6.268 14 14 14"></svg:path><svg:path fill="#F9C23C" d="M17 5.5a1.5 1.5 0 0 0-1-1.415v2.83A1.5 1.5 0 0 0 17 5.5m5.5 8.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m2.382 12.823a14.04 14.04 0 0 0 4.073-5.507a3.5 3.5 0 0 0-4.074 5.507M16 19.05v4.9q.243.05.5.05a2.5 2.5 0 1 0-.5-4.95"></svg:path><svg:path fill="#321B41" d="M15.5 7q.264-.001.5-.085v-2.83A1.5 1.5 0 1 0 15.5 7m-6 9a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m-4.75 8.335a14.05 14.05 0 0 0 5.439 4.406a3.5 3.5 0 1 0-5.439-4.406M16 19.05a2.501 2.501 0 0 0 0 4.9z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFirstQuarterMoonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
