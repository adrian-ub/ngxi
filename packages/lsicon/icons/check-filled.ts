import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCheckFilledIcon],svg[lsicon-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.354 4.354l-7 7a.5.5 0 0 1-.708 0l-4-4l.708-.708L7 10.293l6.647-6.647z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCheckFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
