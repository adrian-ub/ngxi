import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkArrangeListIcon],svg[nrk-arrange-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8h20v2H2zm20 6H2v2h20z"></svg:path>`,
})
export class NrkArrangeListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
