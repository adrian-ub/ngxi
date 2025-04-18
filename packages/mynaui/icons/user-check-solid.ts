import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiUserCheckSolidIcon],svg[mynaui-user-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 7.5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m11.999 12.962c-.262-5.148-4.307-7.712-8.249-7.712s-7.987 2.563-8.249 7.712a.75.75 0 0 0 .71.787c3.365.171 12.998.106 15.077 0a.75.75 0 0 0 .711-.787m-6.068-5.32a.75.75 0 0 1 .169 1.047l-2.1 2.907a.974.974 0 0 1-1.522.072l-1.034-1.182a.75.75 0 0 1 1.129-.988l.598.684l1.713-2.371a.75.75 0 0 1 1.047-.169"></svg:path>`,
})
export class MynauiUserCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
