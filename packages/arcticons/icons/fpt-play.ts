import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFptPlayIcon],svg[arcticons-fpt-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5C39 5.5 42.5 9 42.5 24S39 42.5 24 42.5S5.5 39 5.5 24S9 5.5 24 5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.77 24c0-10.376-.264-10.224 8.723-5.036s8.986 4.884 0 10.072S16.77 34.376 16.77 24"></svg:path>`,
})
export class ArcticonsFptPlayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
