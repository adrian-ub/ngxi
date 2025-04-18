import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeOfficeIcon],svg[icomoon-free-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 16h8V0H0zM5 2h2v2H5zm0 4h2v2H5zm0 4h2v2H5zM1 2h2v2H1zm0 4h2v2H1zm0 4h2v2H1zm8-5h7v1H9zm0 11h2v-4h3v4h2V7H9z"></svg:path>`,
})
export class IcomoonFreeOfficeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
