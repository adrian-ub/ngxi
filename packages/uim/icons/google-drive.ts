import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimGoogleDriveIcon],svg[uim-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.334 14.887H22l-6.666-11.55H8.667z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M8.667 3.338L2 14.888l3.334 5.774L12 9.112z"></svg:path><svg:path fill="currentColor" d="m8.667 14.887l-3.333 5.775h13.333L22 14.887z" opacity=".5"></svg:path>`,
})
export class UimGoogleDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
