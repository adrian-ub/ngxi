import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeWarningIcon],svg[icomoon-free-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 1.45l6.705 13.363H1.296zM8 0c-.345 0-.69.233-.951.698L.22 14.309C-.303 15.239.142 16 1.209 16h13.583c1.067 0 1.512-.761.989-1.691L8.952.698C8.69.233 8.346 0 8.001 0z"></svg:path><svg:path fill="currentColor" d="M9 13a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-2a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1"></svg:path>`,
})
export class IcomoonFreeWarningIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
