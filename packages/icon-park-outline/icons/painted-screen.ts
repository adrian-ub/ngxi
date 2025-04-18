import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePaintedScreenIcon],svg[icon-park-outline-painted-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="28" x="5" y="10" stroke="currentColor" stroke-width="4" rx="3"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 24v-7"></svg:path><svg:rect width="4" height="4" x="15" y="29" fill="currentColor" rx="2" transform="rotate(90 15 29)"></svg:rect></svg:g>`,
})
export class IconParkOutlinePaintedScreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
