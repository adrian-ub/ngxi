import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDeleteFilledIcon],svg[lsicon-delete-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 3h4V2H6zM2 5h1v8.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5h1V4H2zm4 2v4h1V7zm3 0v4h1V7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDeleteFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
