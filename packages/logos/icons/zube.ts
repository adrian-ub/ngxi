import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosZubeIcon],svg[logos-zube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0D83DD" d="m0 63.228l119.833 63.23v50.744L0 113.972zM119.834 0L8.994 58.483L57.08 83.855l62.754-33.111zm16.333 0v50.744L207.914 88.6l-71.747 37.856V177.2L256 113.971V63.229z"></svg:path>`,
})
export class LogosZubeIcon {
  readonly viewBox = input("0 0 256 178")
  readonly width = input("1.44em")
  readonly height = input("1em")
}
