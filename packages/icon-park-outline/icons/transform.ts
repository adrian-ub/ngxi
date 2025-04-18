import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTransformIcon],svg[icon-park-outline-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="13.715" cy="13.714" r="6.857"></svg:circle><svg:circle cx="34.286" cy="34.285" r="6.857"></svg:circle><svg:path d="M24.001 44c-11.046 0-20-8.954-20-20l6.667 3.333M24.001 4c11.046 0 20 8.954 20 20l-6.667-3.333"></svg:path></svg:g>`,
})
export class IconParkOutlineTransformIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
