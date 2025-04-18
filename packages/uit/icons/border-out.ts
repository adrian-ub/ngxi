import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitBorderOutIcon],svg[uit-border-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 16 11.5M20.5 3h-17a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5M20 20H4V4h16zm-8-2.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 12 15.5m0-6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 12 7.5m-4 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 8 11.5m4 2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 12 11.5"></svg:path>`,
})
export class UitBorderOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
