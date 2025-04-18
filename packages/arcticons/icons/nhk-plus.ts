import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNhkPlusIcon],svg[arcticons-nhk-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.14 27.75l2.017-7.514l3.04 7.514l2.016-7.514m3.431.001l-2.016 7.514m7.074-7.514l-2.016 7.514m-4.046-3.772h5.057m4.434-3.729l-2.016 7.514m.704-2.618l5.41-4.872m-2.009 7.49l-2.131-3.757m5.829 0h4.941m-2.471-2.529v5.057"></svg:path>`,
})
export class ArcticonsNhkPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
