import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceLeftFilledIcon],svg[lsicon-surface-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 .95l7 3.23v7.64l-7 3.23l-7-3.23V4.18zm.5 12.769L14 11.18V5.281L8.5 7.82zM8 6.949L13.307 4.5L8 2.05L2.693 4.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSurfaceLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
