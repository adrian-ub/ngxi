import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeBellIcon],svg[icomoon-free-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.023 12.5c0-4.5-4-3.5-4-7q-.001-.434-.079-.749c-.263-1.766-1.44-3.183-2.965-3.615A1 1 0 0 0 9 .945C9 .425 8.55 0 8 0S7 .425 7 .945q0 .098.021.191c-1.71.484-2.983 2.208-3.02 4.273L4 5.5C4 9 0 8 0 12.5c0 1.191 2.665 2.187 6.234 2.439a2 2 0 0 0 3.532 0C13.334 14.688 16 13.691 16 12.5v-.011l.024.011zm-3.113.845c-.847.226-1.846.389-2.918.479a2 2 0 0 0-3.984 0c-1.072-.09-2.071-.253-2.918-.479c-1.166-.311-1.724-.659-1.928-.845c.204-.186.762-.534 1.928-.845c1.356-.362 3.1-.561 4.91-.561s3.554.199 4.91.561c1.166.311 1.724.659 1.928.845c-.204.186-.762.534-1.928.845"></svg:path>`,
})
export class IcomoonFreeBellIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
