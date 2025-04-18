import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFileCollectionOneIcon],svg[icon-park-twotone-file-collection-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFileCollectionOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12"></svg:path><svg:path fill="#555" d="M30.85 30C28.724 30 27 32.009 27 34.486c0 4.487 4.55 8.565 7 9.514c2.45-.949 7-5.027 7-9.514C41 32.01 39.276 30 37.15 30c-1.302 0-2.453.753-3.15 1.906C33.303 30.753 32.152 30 30.85 30"></svg:path><svg:path d="M30 4v10h10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFileCollectionOne0)"></svg:path>`,
})
export class IconParkTwotoneFileCollectionOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
