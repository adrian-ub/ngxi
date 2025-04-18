import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddHomeIcon],svg[ic-twotone-add-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5L6 10v9h5.08c-.62-4.3 2.72-8 6.92-8v-1z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M6 19v-9l6-4.5l6 4.5v1c.7 0 1.37.1 2 .29V9l-8-6l-8 6v12h7.68c-.3-.62-.5-1.29-.6-2z"></svg:path><svg:path fill="currentColor" d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21z"></svg:path>`,
})
export class IcTwotoneAddHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
