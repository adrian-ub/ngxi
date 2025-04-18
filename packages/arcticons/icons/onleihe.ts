import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOnleiheIcon],svg[arcticons-onleihe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4"></svg:path><svg:rect width="11.976" height="15.868" x="10.167" y="18.614" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.988" ry="5.988" transform="rotate(-20 16.155 26.549)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.5 26.859l-3.38-9.284a5.99 5.99 0 0 0-7.674-3.58h0a5.99 5.99 0 0 0-3.579 7.676l3.38 9.284m-3.38-9.284l-2.048-5.627"></svg:path>`,
})
export class ArcticonsOnleiheIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
