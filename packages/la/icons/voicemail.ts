import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laVoicemailIcon],svg[la-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9c-3.855 0-7 3.145-7 7s3.145 7 7 7h16c3.855 0 7-3.145 7-7s-3.145-7-7-7s-7 3.145-7 7c0 1.957.82 3.727 2.125 5h-6.25A6.98 6.98 0 0 0 15 16c0-3.855-3.145-7-7-7m0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5m16 0c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5"></svg:path>`,
})
export class LaVoicemailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
