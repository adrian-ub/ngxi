import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSpannerIcon],svg[icon-park-outline-spanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M30.442 5c1.964 0 3.823.448 5.479 1.246l-3.204 3.18a4.67 4.67 0 0 0 0 6.64a4.753 4.753 0 0 0 6.687 0l2.853-2.832c.48 1.322.743 2.748.743 4.234c0 6.887-5.623 12.469-12.558 12.469c-1.66 0-3.244-.32-4.693-.9L13.07 41.625a4.75 4.75 0 0 1-6.685 0a4.67 4.67 0 0 1 0-6.637L18.952 22.51a12.35 12.35 0 0 1-1.069-5.042C17.883 10.583 23.506 5 30.442 5Z"></svg:path>`,
})
export class IconParkOutlineSpannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
