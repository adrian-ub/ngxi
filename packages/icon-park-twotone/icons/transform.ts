import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTransformIcon],svg[icon-park-twotone-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTransform0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="13.715" cy="13.714" r="6.857" fill="#555"></svg:circle><svg:circle cx="34.286" cy="34.285" r="6.857" fill="#555"></svg:circle><svg:path d="M24.001 44c-11.046 0-20-8.954-20-20l6.667 3.333M24.001 4c11.046 0 20 8.954 20 20l-6.667-3.333"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTransform0)"></svg:path>`,
})
export class IconParkTwotoneTransformIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
