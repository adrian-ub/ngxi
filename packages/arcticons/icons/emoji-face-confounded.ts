import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiFaceConfoundedIcon],svg[arcticons-emoji-face-confounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.058 16.289l6.377 1.955l-6.324 2.613m19.831-4.568l-6.377 1.955l6.324 2.613m-19.597 8.72l2.841-2.33l3.162 4.464l3.707-3.253l3.706 3.253l3.172-4.464l2.841 2.337v-.009"></svg:path><svg:circle cx="24" cy="24" r="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsEmojiFaceConfoundedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
