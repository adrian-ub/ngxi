import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBh1x1Icon],svg[flag-bh-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h512v512H0"></svg:path><svg:path fill="#ce1126" d="M512 0H102.4l83.4 51.2l-83.4 51.2l83.4 51.2l-83.4 51.2l83.4 51.2l-83.4 51.2l83.4 51.2l-83.4 51.2l83.4 51.2l-83.4 51.2H512"></svg:path>`,
})
export class FlagBh1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
