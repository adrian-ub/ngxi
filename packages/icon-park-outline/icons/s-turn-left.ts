import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSTurnLeftIcon],svg[icon-park-outline-s-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 38H13c-4 0-7-3-7-7s3-7 7-7h6m0 0h16c4 0 7-3 7-7s-3-7-7-7H17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m37 43l5-5l-5-5"></svg:path><svg:circle cx="12" cy="10" r="5" transform="rotate(-180 12 10)"></svg:circle></svg:g>`,
})
export class IconParkOutlineSTurnLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
