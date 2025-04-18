import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFileHidingIcon],svg[icon-park-twotone-file-hiding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFileHiding0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2"></svg:path><svg:path d="m30 4l10 10m-24 9a8.6 8.6 0 0 0 1.255 2.517C18.783 27.63 21.235 29 24 29s5.217-1.37 6.745-3.483A8.6 8.6 0 0 0 32 23m-10.478 6.068l-1.036 3.864m6-3.864l1.036 3.864m2.832-5.578l2.828 2.828M15 30.01l2.828-2.828"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFileHiding0)"></svg:path>`,
})
export class IconParkTwotoneFileHidingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
