import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitThLargeIcon],svg[uit-th-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.47 3H3.53a.53.53 0 0 0-.53.53v16.94c0 .293.237.53.53.53h16.94a.53.53 0 0 0 .53-.53V3.53a.53.53 0 0 0-.53-.53M11.5 19.941H4.059V12.5H11.5zm0-8.441H4.059V4.059H11.5zm8.441 8.441H12.5V12.5h7.441zm0-8.441H12.5V4.059h7.441z"></svg:path>`,
})
export class UitThLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
