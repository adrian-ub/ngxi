import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeParagraphCenterIcon],svg[icomoon-free-paragraph-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h16v2H0zm3 3h10v2H3zm0 6h10v2H3zM0 7h16v2H0zm0 6h16v2H0z"></svg:path>`,
})
export class IcomoonFreeParagraphCenterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
