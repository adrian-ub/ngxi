import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfUpFilledIcon],svg[lsicon-shelf-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.207 2H4.793L2 4.793V14h12V4.793zm-7.5 2.5l1.5-1.5h5.586l1.5 1.5zm5.94 5.354l.707-.708L8 6.793L5.646 9.146l.708.708L7.5 8.707V12h1V8.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShelfUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
