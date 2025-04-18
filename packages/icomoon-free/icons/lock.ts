import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeLockIcon],svg[icomoon-free-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 7H9V4c0-1.654-1.346-3-3-3H4C2.346 1 1 2.346 1 4v3H.75a.753.753 0 0 0-.75.75v7.5c0 .412.338.75.75.75h8.5c.412 0 .75-.338.75-.75v-7.5A.753.753 0 0 0 9.25 7M3 4c0-.551.449-1 1-1h2c.551 0 1 .449 1 1v3H3z"></svg:path>`,
})
export class IcomoonFreeLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
