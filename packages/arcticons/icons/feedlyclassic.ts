import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFeedlyclassicIcon],svg[arcticons-feedlyclassic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 7.17a1.53 1.53 0 0 0-1.06.44l-18 18a1.48 1.48 0 0 0 0 2.11L18 40.83h12l13.09-13.1a1.48 1.48 0 0 0 0-2.11l-18-18A1.5 1.5 0 0 0 24 7.17M10.5 27.52l12.74-12.67M21 25.09l-6.49 6.44m4.06 4.06l2.5-2.44"></svg:path>`,
})
export class ArcticonsFeedlyclassicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
