import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUserFilledIcon],svg[lsicon-user-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-2 9v-.5A4.5 4.5 0 0 1 7.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
