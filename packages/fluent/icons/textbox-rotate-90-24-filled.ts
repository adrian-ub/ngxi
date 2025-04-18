import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextboxRotate9024FilledIcon],svg[fluent-textbox-rotate-90-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.25 21A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3H5.75A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21zm-5.75-6.75a.75.75 0 0 1-1.493.102L11 14.25v-7.5a.75.75 0 0 1 1.493-.102l.007.102zm-4-7.5v10.5a.75.75 0 0 1-1.493.102L7 17.25V6.75a.75.75 0 0 1 1.493-.102zm8 10.5a.75.75 0 0 1-1.493.102L15 17.25V6.75a.75.75 0 0 1 1.493-.102l.007.102z"></svg:path>`,
})
export class FluentTextboxRotate9024FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
