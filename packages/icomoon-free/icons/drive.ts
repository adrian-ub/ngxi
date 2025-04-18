import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeDriveIcon],svg[icomoon-free-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14h10a3 3 0 0 0 3-3H0a3 3 0 0 0 3 3m10-2h1v1h-1zm2-10H1l-1 8h16z"></svg:path>`,
})
export class IcomoonFreeDriveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
