import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsYoutubeIcon],svg[meteor-icons-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.5 17q-1-5.5 0-10Q1.9 4.8 4 4.5q8-1 16 0q2.1.3 2.5 2.5q1 4.5 0 10q-.4 2.2-2.5 2.5q-8 1-16 0q-2.1-.3-2.5-2.5m8-8.5v7l6-3.5Z"></svg:path>`,
})
export class MeteorIconsYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
