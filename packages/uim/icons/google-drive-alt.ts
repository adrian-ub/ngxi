import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimGoogleDriveAltIcon],svg[uim-google-drive-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 19.796l3-5.197h12l-3 5.197z"></svg:path><svg:path fill="currentColor" d="M15 14.599h6L15 4.204H9z" opacity=".25"></svg:path><svg:path fill="currentColor" d="m3 14.599l3 5.197L12 9.4L9 4.204L3 14.6z" opacity=".5"></svg:path>`,
})
export class UimGoogleDriveAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
