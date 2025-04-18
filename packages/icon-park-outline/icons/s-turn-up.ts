import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSTurnUpIcon],svg[icon-park-outline-s-turn-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 31v4c0 4-3 7-7 7s-7-3-7-7V16m28 26V13c0-4-3-7-7-7s-7 3-7 7v18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m33 37l5 5l5-5"></svg:path><svg:circle cx="10" cy="11" r="5" transform="rotate(-180 10 11)"></svg:circle></svg:g>`,
})
export class IconParkOutlineSTurnUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
