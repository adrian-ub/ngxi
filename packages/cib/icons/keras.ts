import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibKerasIcon],svg[cib-keras-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 0H0v32h32zM11.266 6.88l.266.224v8.323l8.615-8.599h2.615l.266.531l-6.854 6.802l7.297 10.583l-.271.401h-2.583l-6.203-9.172l-2.88 2.771v6.135l-.25.266H9.336l-.266-.266V7.103l.224-.224z"></svg:path>`,
})
export class CibKerasIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
