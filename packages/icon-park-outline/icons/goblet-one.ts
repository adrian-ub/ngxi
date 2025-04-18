import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGobletOneIcon],svg[icon-park-outline-goblet-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m5.736 24.121l4.95 4.95c5.077 5.077 13.308 5.077 18.385 0v0c5.077-5.077 5.077-13.308 0-18.385l-4.95-4.95"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m30 30l6 6"></svg:path><svg:ellipse cx="14" cy="14" rx="13" ry="7" transform="rotate(-45 14 14)"></svg:ellipse><svg:ellipse cx="38" cy="38" rx="6" ry="3" transform="rotate(-45 38 38)"></svg:ellipse></svg:g>`,
})
export class IconParkOutlineGobletOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
