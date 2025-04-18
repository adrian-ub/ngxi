import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSuspendFilledIcon],svg[lsicon-suspend-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6 11h1V5H6zm4-6H9v6h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSuspendFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
