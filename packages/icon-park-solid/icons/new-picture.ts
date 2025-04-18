import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidNewPictureIcon],svg[icon-park-solid-new-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSNewPicture0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="m6 28l10.693-9.802a2 2 0 0 1 2.653-.044L32 29m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 20v10m36-10v10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSNewPicture0)"></svg:path>`,
})
export class IconParkSolidNewPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
