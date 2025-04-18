import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPointerFilledIcon],svg[lsicon-pointer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.832 1.302L14.394 10H8.777l-3.086 4.937z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPointerFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
