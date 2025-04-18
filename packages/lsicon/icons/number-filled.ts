import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconNumberFilledIcon],svg[lsicon-number-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 4.5h1v7m0 0H2m1 0h1m1-7h4V8H5.5v3.5h4m1-7H14V8m0 0h-3m3 0v3.5h-3.5"></svg:path>`,
})
export class LsiconNumberFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
