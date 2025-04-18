import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThaigerNewsIcon],svg[arcticons-thaiger-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.564 42.483l-5.56-20.87l-8.642 2.264l-3.143-10.408L37.639 5.5l3.142 10.407l-8.972 2.363l5.556 20.883c-3.714 2.626-8.074 3.484-12.801 3.33"></svg:path>`,
})
export class ArcticonsThaigerNewsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
