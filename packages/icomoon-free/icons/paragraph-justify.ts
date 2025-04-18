import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeParagraphJustifyIcon],svg[icomoon-free-paragraph-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h16v2H0zm0 3h16v2H0zm0 3h16v2H0zm0 3h16v2H0zm0 3h16v2H0z"></svg:path>`,
})
export class IcomoonFreeParagraphJustifyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
