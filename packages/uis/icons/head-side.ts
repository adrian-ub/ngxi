import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisHeadSideIcon],svg[uis-head-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 2c-2-.1-4 .7-5.5 2.1c-1.4 1.4-2.2 3.4-2.2 5.4l-1.9 4c-.2.5 0 1.1.5 1.3c.1.2.3.2.4.2h1v2c0 1.1.9 2 2 2h1v2c0 .6.4 1 1 1h9.3c.5-.2.8-.7.7-1.2l-.9-3.2l1.9-7.3v-.5c0-4.1-3.2-7.6-7.3-7.8"></svg:path>`,
})
export class UisHeadSideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
