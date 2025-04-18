import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGoogleDriveLogoFillIcon],svg[ph-google-drive-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.6 143.78L169.13 31.52A15.91 15.91 0 0 0 155.56 24h-55.13a15.89 15.89 0 0 0-13.56 7.52l-.05.07L18.44 143.7a16 16 0 0 0-.33 16.42l27.32 47.82A16 16 0 0 0 59.32 216h137.35a16 16 0 0 0 13.89-8.06l27.32-47.82a15.91 15.91 0 0 0-.28-16.34M219 144h-46.48l-35.19-58.67l22.75-37.92ZM92.53 160h70.94l24 40H68.53Zm9.6-16L128 100.88L153.87 144Zm-6.22-96.59l22.76 37.92L83.47 144H37Z"></svg:path>`,
})
export class PhGoogleDriveLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
