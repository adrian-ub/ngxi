import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInternshalaIcon],svg[arcticons-internshala-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-23.073 10v17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.647 30.637c1.042 1.357 2.35 1.863 4.168 1.863h2.517a4.24 4.24 0 0 0 4.24-4.24v-.02a4.24 4.24 0 0 0-4.24-4.24h-2.776a4.245 4.245 0 0 1-4.246-4.245h0a4.255 4.255 0 0 1 4.255-4.255h2.503c1.818 0 3.126.506 4.168 1.863"></svg:path>`,
})
export class ArcticonsInternshalaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
