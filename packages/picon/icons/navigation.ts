import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNavigationIcon],svg[picon-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m6-2L1 4h3v3"></svg:path>`,
})
export class PiconNavigationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
