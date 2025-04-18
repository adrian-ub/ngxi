import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRsFileManagerIcon],svg[arcticons-rs-file-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.41 29.037c.293.507.744.697 1.42.697h.933c.87 0 1.704-.71 1.863-1.585l.002-.007c.16-.875-.416-1.584-1.285-1.584h-1.03c-.872 0-1.447-.71-1.288-1.585h0c.161-.878.997-1.589 1.87-1.589h.928c.676 0 1.126.189 1.42.697m-8.455 3.568l1.685 2.082m-4.13.002l1.159-6.349h2.065c1.168 0 1.94.955 1.726 2.133c-.216 1.177-1.336 2.132-2.505 2.132h-2.065m14.276-1.105a9 9 0 1 1-9-9.001H24a9 9 0 0 1 9 9h0z"></svg:path>`,
})
export class ArcticonsRsFileManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
