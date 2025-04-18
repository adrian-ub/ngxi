import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSuspendOutlineIcon],svg[lsicon-suspend-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6.5 5v6m3 0V5m5 3a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path>`,
})
export class LsiconSuspendOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
