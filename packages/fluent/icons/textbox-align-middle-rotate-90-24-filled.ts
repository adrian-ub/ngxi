import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextboxAlignMiddleRotate9024FilledIcon],svg[fluent-textbox-align-middle-rotate-90-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5.75A2.75 2.75 0 0 0 18.25 3H5.75A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25zm-6 1.5v9.5a.75.75 0 0 1-1.5 0v-9.5a.75.75 0 0 1 1.5 0m-4 0v9.5a.75.75 0 0 1-1.5 0v-9.5a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentTextboxAlignMiddleRotate9024FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
