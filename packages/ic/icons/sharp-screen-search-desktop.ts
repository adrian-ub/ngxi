import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpScreenSearchDesktopIcon],svg[ic-sharp-screen-search-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19h22v2H1zM22 3H2v15h19.99zm-6.53 12.03l-2.09-2.09c-1.35.87-3.17.71-4.36-.47c-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0c1.18 1.18 1.34 3 .47 4.36l2.09 2.09z"></svg:path><svg:circle cx="11.5" cy="10" r="2" fill="currentColor"></svg:circle>`,
})
export class IcSharpScreenSearchDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
