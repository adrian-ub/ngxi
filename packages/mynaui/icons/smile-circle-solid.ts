import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSmileCircleSolidIcon],svg[mynaui-smile-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.148 2.553a.75.75 0 0 0 .155 1.05A5.77 5.77 0 0 0 12 16.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 0 0-.894-1.204A4.27 4.27 0 0 1 12 15.25a4.27 4.27 0 0 1-2.553-.852a.75.75 0 0 0-1.05.155M15.25 10a.75.75 0 1 0-1.5 0v.5a.75.75 0 0 0 1.5 0zM9.5 9.25a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0V10a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class MynauiSmileCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
