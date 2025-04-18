import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconParkFilledIcon],svg[lsicon-park-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 8H6V5h3.5a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1.5 3H5v8h1V9h3.5a2.5 2.5 0 0 0 0-5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconParkFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
