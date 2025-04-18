import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSandOutlineIcon],svg[lsicon-sand-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 5.5h3m0 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm-5 0h1m6 2h3.5m0 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM2 7.5h6m-1 2h4.5m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4ZM2 9.5h4"></svg:path>`,
})
export class LsiconSandOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
