import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGobletOneIcon],svg[icon-park-goblet-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5.73633 24.1211L10.6861 29.0709C15.7629 34.1477 23.9941 34.1477 29.0709 29.0709V29.0709C34.1477 23.994 34.1477 15.7629 29.0709 10.6861L24.1211 5.73632"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="M30 29.9998L35.9998 35.9998"></svg:path><svg:ellipse cx="14" cy="14" rx="13" ry="7" transform="rotate(-45 14 14)"></svg:ellipse><svg:ellipse cx="38" cy="38" rx="6" ry="3" transform="rotate(-45 38 38)"></svg:ellipse></svg:g>`,
})
export class IconParkGobletOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
