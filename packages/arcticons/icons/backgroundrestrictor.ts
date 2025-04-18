import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBackgroundrestrictorIcon],svg[arcticons-backgroundrestrictor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.311 41.09a17.417 17.417 0 0 0 8.991-29.392M20.675 6.924a17.397 17.397 0 0 0-8.977 29.379"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.4 13.6l-4.628 4.628l.013-12.727H42.5l-4.629 4.628zM13.599 34.401l4.615-4.615v12.715H5.5l4.628-4.629zM42.5 42.5l-37-37"></svg:path>`,
})
export class ArcticonsBackgroundrestrictorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
