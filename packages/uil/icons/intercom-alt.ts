import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilIntercomAltIcon],svg[uil-intercom-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.991 15a1 1 0 0 0 1-1V6a1 1 0 1 0-2 0v8a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1V6a1 1 0 1 0-2 0v8a1 1 0 0 0 1 1m-8-2a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1m14-12h-16a3.003 3.003 0 0 0-3 3v16a3.003 3.003 0 0 0 3 3h16a3.003 3.003 0 0 0 3-3V4a3.003 3.003 0 0 0-3-3m1 19a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-3.643-4.591A8.82 8.82 0 0 1 11.99 17a9 9 0 0 1-5.356-1.591a1 1 0 1 0-1.287 1.53A10.8 10.8 0 0 0 11.99 19a10.8 10.8 0 0 0 6.644-2.06a1 1 0 0 0-1.287-1.531M17.99 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilIntercomAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
