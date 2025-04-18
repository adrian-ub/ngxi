import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDoswimmerIcon],svg[arcticons-doswimmer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.24 27.394h14.666c7.96 0 6.331-9.693.18-9.723c-.402-7.116-11.322-8.673-13.44-2.077c-7.227.11-8.371 11.8-1.406 11.8m8.207 5.59l-3.87-1.822l-2.483 3.929m1.062-1.2l2.52 1.173M5.5 35.227h37"></svg:path><svg:circle cx="15.475" cy="32.486" r="1.349" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDoswimmerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
