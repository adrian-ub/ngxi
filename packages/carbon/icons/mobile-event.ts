import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMobileEventIcon],svg[carbon-mobile-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.38 28h-6.762L24 21.236zM24 18a1 1 0 0 0-.895.553l-5 10A1 1 0 0 0 19 30h10a1 1 0 0 0 .921-1.39l-5.027-10.057A1 1 0 0 0 24 18m-9 10H9V8h14v7h2V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v24c0 1.103.897 2 2 2h6zM9 4h14v2H9z"></svg:path>`,
})
export class CarbonMobileEventIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
