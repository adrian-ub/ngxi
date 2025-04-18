import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwaySms4Icon],svg[subway-sms-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 0H64C28.6 0 0 28.6 0 64v256c0 35.4 28.6 64 64 64h128l-42.7 128l192-128H448c35.4 0 64-28.6 64-64V64c0-35.4-28.6-64-64-64m-74.7 256L320 309.3l-64-64l-64 64l-53.3-53.3l64-64l-64-64L192 74.7l64 64l64-64l53.3 53.3l-64 64z"></svg:path>`,
})
export class SubwaySms4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
