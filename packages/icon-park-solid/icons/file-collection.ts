import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFileCollectionIcon],svg[icon-park-solid-file-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFileCollection0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2"></svg:path><svg:path stroke="#fff" d="m30 4l10 10"></svg:path><svg:path fill="#000" stroke="#000" d="M20.85 21C18.724 21 17 23.009 17 25.486c0 4.487 4.55 8.565 7 9.514c2.45-.949 7-5.027 7-9.514C31 23.01 29.276 21 27.15 21c-1.302 0-2.453.753-3.15 1.906C23.303 21.753 22.152 21 20.85 21"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFileCollection0)"></svg:path>`,
})
export class IconParkSolidFileCollectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
