import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMedalOneIcon],svg[icon-park-outline-medal-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m6 6l10 12M42 6L32 18M31 4l-5 12M17 4l5 12"></svg:path><svg:circle cx="24" cy="30" r="14"></svg:circle><svg:circle cx="24" cy="30" r="7"></svg:circle></svg:g>`,
})
export class IconParkOutlineMedalOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
