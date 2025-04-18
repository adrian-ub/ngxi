import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineStereoOneIcon],svg[icon-park-outline-stereo-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="30" height="38" x="9" y="5" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 18h30"></svg:path><svg:circle cx="24" cy="30" r="6"></svg:circle></svg:g>`,
})
export class IconParkOutlineStereoOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
