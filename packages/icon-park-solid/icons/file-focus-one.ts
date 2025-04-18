import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFileFocusOneIcon],svg[icon-park-solid-file-focus-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12"></svg:path><svg:path fill="currentColor" d="m34 27l2.523 5.527l6.036.692l-4.476 4.108l1.207 5.954L34 40.293l-5.29 2.988l1.207-5.954l-4.477-4.108l6.037-.692z"></svg:path><svg:path d="M30 4v10h10"></svg:path></svg:g>`,
})
export class IconParkSolidFileFocusOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
