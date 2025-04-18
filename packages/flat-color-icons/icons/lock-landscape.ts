import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsLockLandscapeIcon],svg[flat-color-icons-lock-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#37474F" d="M7 10h34c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V14c0-2.2 1.8-4 4-4"></svg:path><svg:path fill="#BBDEFB" d="M42 34V14c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h34c.6 0 1-.4 1-1"></svg:path><svg:g fill="#3F51B5"><svg:path d="M29 31H19c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1"></svg:path><svg:path d="M24 17c-2.2 0-4 1.8-4 4v3h2v-3c0-1.1.9-2 2-2s2 .9 2 2v3h2v-3c0-2.2-1.8-4-4-4"></svg:path></svg:g>`,
})
export class FlatColorIconsLockLandscapeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
