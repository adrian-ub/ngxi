import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonMoney24FilledIcon],svg[fluent-person-money-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.755 14c.78 0 1.467.397 1.87 1H13.5a2.5 2.5 0 0 0-2.5 2.5v4q0 .243.045.472c-2.939-.186-5.136-1.25-6.53-3.207a2.75 2.75 0 0 1-.511-1.596v-.92A2.25 2.25 0 0 1 6.253 14zM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10M12 17.5a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5zm10 .5a1 1 0 0 1-1-1h-1a2 2 0 0 0 2 2zm0 2a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1zm-8-3a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2zm1 5a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1zm4.25-2.5a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 0 0 3.5 0"></svg:path>`,
})
export class FluentPersonMoney24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
