import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconControlOutlineIcon],svg[lsicon-control-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 4.5h6m-12 0h2.5m0 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0Zm-2.5 7h6m3.5 0H14m-2.5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path>`,
})
export class LsiconControlOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
