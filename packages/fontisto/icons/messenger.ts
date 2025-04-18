import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoMessengerIcon],svg[fontisto-messenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.373 0 0 4.974 0 11.111a10.8 10.8 0 0 0 4.438 8.633l.031.021V24l4.088-2.242c1.031.295 2.215.464 3.439.464H12c6.627 0 12-4.975 12-11.11S18.627 0 12 0m1.191 14.963L10.136 11.7l-5.963 3.26L10.732 8l3.131 3.259L19.752 8z"></svg:path>`,
})
export class FontistoMessengerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
