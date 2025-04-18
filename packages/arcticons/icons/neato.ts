import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNeatoIcon],svg[arcticons-neato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:rect width="4.697" height="6.248" x="23.009" y="20.352" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.349" ry="2.349"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.706 22.701V26.6m-7.613-.688a2.34 2.34 0 0 1-1.661.688h-.001a2.35 2.35 0 0 1-2.35-2.35v-1.549a2.35 2.35 0 0 1 2.35-2.349h0a2.35 2.35 0 0 1 2.35 2.35v.703m0 .071h-4.7"></svg:path><svg:rect width="4.697" height="6.106" x="34.15" y="20.494" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.349" ry="2.349"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.153 22.842a2.35 2.35 0 0 1 2.349-2.348h0a2.35 2.35 0 0 1 2.348 2.348V26.6m-4.697-3.758V26.6m22.054-9.394V26.6m-1.227-6.106h1.227m0 0h1.228"></svg:path>`,
})
export class ArcticonsNeatoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
