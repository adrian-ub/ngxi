import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiNaviconIcon],svg[ei-navicon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12h30v4H10zm0 10h30v4H10zm0 10h30v4H10z"></svg:path>`,
})
export class EiNaviconIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
