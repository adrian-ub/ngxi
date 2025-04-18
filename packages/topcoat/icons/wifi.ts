import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatWifiIcon],svg[topcoat-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M25 31.041a5.69 5.69 0 0 0-8 0L21 35zm8-7.921c-6.63-6.562-17.37-6.562-24 0l4 3.959c4.42-4.37 11.58-4.37 16 0zm8-7.921c-11.05-10.932-28.95-10.932-40 0l4 3.959c8.84-8.751 23.16-8.751 32 0z"></svg:path>`,
})
export class TopcoatWifiIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
