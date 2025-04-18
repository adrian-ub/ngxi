import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPixivIcon],svg[arcticons-pixiv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.281 9.296V42.5m-2.183 0h4.366M4.388 16.214C7.878 12.73 15.819 5.5 27.198 5.5s16.414 8.83 16.414 15.467s-6.34 14.578-16.77 14.578s-13.561-3.911-13.561-3.911m-8.893-15.42l1.061 2.205"></svg:path>`,
})
export class ArcticonsPixivIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
