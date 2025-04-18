import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineShortsIcon],svg[icon-park-outline-shorts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 6H11v10L4 33l15 9l5-6l5 6l15-9l-7-17z"></svg:path><svg:path fill="currentColor" d="M11 14a2 2 0 1 0 0 4zm26 4a2 2 0 1 0 0-4zm-26 0h26v-4H11z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 14v2l1.75 4.25M11 14v2l-1.75 4.25"></svg:path></svg:g>`,
})
export class IconParkOutlineShortsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
