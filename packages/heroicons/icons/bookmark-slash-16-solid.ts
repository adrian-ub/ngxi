import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsBookmarkSlash16SolidIcon],svg[heroicons-bookmark-slash-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.75v7.775L4.475 2h7.775a.75.75 0 0 1 .75.75M3 13.25V5.475l4.793 4.793L4.28 13.78A.75.75 0 0 1 3 13.25M2.22 2.22a.75.75 0 0 1 1.06 0l10.5 10.5a.75.75 0 1 1-1.06 1.06L2.22 3.28a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class HeroiconsBookmarkSlash16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
