import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowRightEndOnRectangle16SolidIcon],svg[heroicons-arrow-right-end-on-rectangle-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.25 2A2.75 2.75 0 0 1 14 4.75v6.5A2.75 2.75 0 0 1 11.25 14h-3a2.75 2.75 0 0 1-2.75-2.75v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25h-3C7.56 3.5 7 4.06 7 4.75v.5a.75.75 0 0 1-1.5 0v-.5A2.75 2.75 0 0 1 8.25 2z"></svg:path><svg:path d="M7.97 6.28a.75.75 0 0 1 1.06-1.06l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H1.75a.75.75 0 0 1 0-1.5h7.19z"></svg:path></svg:g>`,
})
export class HeroiconsArrowRightEndOnRectangle16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
