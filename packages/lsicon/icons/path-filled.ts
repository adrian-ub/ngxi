import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPathFilledIcon],svg[lsicon-path-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.145 2.75a2 2 0 1 1-.13 1H5a1.5 1.5 0 1 0 0 3h7a2.5 2.5 0 0 1 0 5H6.485a2 2 0 1 1-.13-1H12a1.5 1.5 0 0 0 0-3H5a2.5 2.5 0 0 1 0-5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPathFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
