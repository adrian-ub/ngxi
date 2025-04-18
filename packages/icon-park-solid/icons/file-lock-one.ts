import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFileLockOneIcon],svg[icon-park-solid-file-lock-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12"></svg:path><svg:path fill="currentColor" d="M28 34h14v8H28z"></svg:path><svg:path d="M38 34v-3a3 3 0 1 0-6 0v3M30 4v10h10"></svg:path></svg:g>`,
})
export class IconParkSolidFileLockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
