import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feHeartOIcon],svg[fe-heart-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20c-2.205-.48-9-4.24-9-11a5 5 0 0 1 9-3a5 5 0 0 1 9 3c0 6.76-6.795 10.52-9 11m0-2c3.12-.93 7-4.805 7-9a3 3 0 0 0-3-3q-1.957 0-4 2.5Q9.957 6 8 6a3 3 0 0 0-3 3c0 4.195 3.88 8.07 7 9"></svg:path>`,
})
export class FeHeartOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
