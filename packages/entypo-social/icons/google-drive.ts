import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoSocialGoogleDriveIcon],svg[entypo-social-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.175 13l-3.324 6h11.824L20 13zM5.865 2.299L0 12.914l3.372 6.084L9.238 8.383zM19.445 12L13.349 1H6.604l6.088 11z"></svg:path>`,
})
export class EntypoSocialGoogleDriveIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
