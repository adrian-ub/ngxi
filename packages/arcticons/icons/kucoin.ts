import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKucoinIcon],svg[arcticons-kucoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.425 7.257v33.164m33.155-9.772L28.305 42.925a1.954 1.954 0 0 1-2.77 0l-17.54-17.54a1.954 1.954 0 0 1 0-2.77l17.54-17.54a1.954 1.954 0 0 1 2.77 0L40.58 17.351"></svg:path><svg:circle cx="26.944" cy="24" r="2.611" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsKucoinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
