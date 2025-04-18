import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCamcorderIcon],svg[mdi-camcorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2C4.24 2 2 4.24 2 7v13c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V7c0-2.76-2.24-5-5-5M5 20c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m2-10c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m15-1v5c0 1.1-.9 2-2 2h-7v-2h7V9h-7V7h7c1.1 0 2 .9 2 2"></svg:path>`,
})
export class MdiCamcorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
