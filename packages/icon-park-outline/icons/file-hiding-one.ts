import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFileHidingOneIcon],svg[icon-park-outline-file-hiding-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12"></svg:path><svg:path d="M25 30a8.6 8.6 0 0 0 1.255 2.517C27.783 34.63 30.235 36 33 36s5.217-1.37 6.745-3.483A8.6 8.6 0 0 0 41 30m-10.478 6.068l-1.036 3.864m6-3.864l1.036 3.864m2.832-5.578l2.828 2.828M24 37.01l2.828-2.828M30 4v10h10"></svg:path></svg:g>`,
})
export class IconParkOutlineFileHidingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
