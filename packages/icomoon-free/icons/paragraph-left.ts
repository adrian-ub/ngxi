import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeParagraphLeftIcon],svg[icomoon-free-paragraph-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h16v2H0zm0 3h10v2H0zm0 6h10v2H0zm0-3h16v2H0zm0 6h16v2H0z"></svg:path>`,
})
export class IcomoonFreeParagraphLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
