import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPathOutlineIcon],svg[lsicon-path-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6 11.25h6a2 2 0 1 0 0-4H5a2 2 0 1 1 0-4h3.242M4.5 10a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3ZM10 2a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path>`,
})
export class LsiconPathOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
