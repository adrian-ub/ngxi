import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNotionIcon],svg[arcticons-notion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.141 41.537l-30.498.963l.271-28.936l30.227-1.466z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.141 12.098L32.215 5.5L6.269 7.296l5.645 6.268"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.643 42.5l-5.784-8.137l.41-27.067m14.792 29.402V19.954l12.546 16.385V19.057M18.745 36.855l4.633-.314m-4.633-16.587h2.316m10.23-.74l4.632-.315"></svg:path>`,
})
export class ArcticonsNotionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
