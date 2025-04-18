import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUserNewOutlineIcon],svg[lsicon-user-new-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M11.5 8V4.5m0 0V4m0 .5c0 .5 2 2.5 2 3m0-3.5v3.5m0 0V8m-11 6v-.5a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v.5m-2-9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path>`,
})
export class LsiconUserNewOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
