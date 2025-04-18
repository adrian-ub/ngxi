import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSwitchLeftIcon],svg[ic-twotone-switch-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 8.62v6.76L5.12 12z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M8.5 8.62v6.76L5.12 12zM10 5l-7 7l7 7zm4 0v14l7-7z"></svg:path>`,
})
export class IcTwotoneSwitchLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
