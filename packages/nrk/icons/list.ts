import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkListIcon],svg[nrk-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20v2H2zm0 6h20v2H2zm20 6H2v2h20z"></svg:path>`,
})
export class NrkListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
