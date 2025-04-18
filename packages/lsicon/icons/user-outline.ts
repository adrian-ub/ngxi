import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUserOutlineIcon],svg[lsicon-user-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 14v-.5a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v.5m-2-9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path>`,
})
export class LsiconUserOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
