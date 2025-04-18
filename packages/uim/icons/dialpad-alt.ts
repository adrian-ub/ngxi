import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimDialpadAltIcon],svg[uim-dialpad-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="4" height="4" x="10" y="6.955" fill="currentColor" rx=".545"></svg:rect><svg:rect width="4" height="4" x="10" y=".955" fill="currentColor" rx=".545"></svg:rect><svg:rect width="4" height="4" x="10" y="13.045" fill="currentColor" rx=".545"></svg:rect><svg:rect width="4" height="4" x="4" y="6.955" fill="currentColor" rx=".545"></svg:rect><svg:rect width="4" height="4" x="4" y=".955" fill="currentColor" rx=".545"></svg:rect><svg:rect width="4" height="4" x="4" y="13.045" fill="currentColor" rx=".545"></svg:rect><svg:rect width="4" height="4" x="16" y="6.955" fill="currentColor" rx=".545"></svg:rect><svg:rect width="4" height="4" x="16" y=".955" fill="currentColor" rx=".545"></svg:rect><svg:rect width="4" height="4" x="16" y="13.045" fill="currentColor" rx=".545"></svg:rect><svg:rect width="4" height="4" x="10" y="19" fill="currentColor" rx=".545"></svg:rect>`,
})
export class UimDialpadAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
