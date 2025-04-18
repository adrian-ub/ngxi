import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimAppsIcon],svg[uim-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="9" height="9" x="2" y="2" fill="currentColor" rx="1"></svg:rect><svg:rect width="9" height="9" x="2" y="13" fill="currentColor" opacity=".5" rx="1"></svg:rect><svg:rect width="9" height="9" x="13" y="2" fill="currentColor" opacity=".5" rx="1"></svg:rect><svg:rect width="9" height="9" x="13" y="13" fill="currentColor" opacity=".5" rx="1"></svg:rect>`,
})
export class UimAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
