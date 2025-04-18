import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkListActiveIcon],svg[nrk-list-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v4h20zM2 10h20v4H2zm0 6h20v4H2z"></svg:path>`,
})
export class NrkListActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
