import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFileSearchIcon],svg[icon-park-twotone-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFileSearch0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 20.842V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h16"></svg:path><svg:path d="M14 17h6m8 0h6M14 28h6m-6 6h6m-3-14v-6m20.728 23.728l4.243 4.243"></svg:path><svg:circle cx="33.485" cy="33.485" r="6" fill="#555" stroke-linejoin="round" transform="rotate(45 33.485 33.485)"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFileSearch0)"></svg:path>`,
})
export class IconParkTwotoneFileSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
