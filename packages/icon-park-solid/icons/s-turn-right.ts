import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSTurnRightIcon],svg[icon-park-solid-s-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 24H13c-4 0-7-3-7-7s3-7 7-7h19M8 38h27c4 0 7-3 7-7s-3-7-7-7h-5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m13 43l-5-5l5-5"></svg:path><svg:circle cx="37.176" cy="10" r="5" fill="currentColor" transform="rotate(-180 37.176 10)"></svg:circle></svg:g>`,
})
export class IconParkSolidSTurnRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
