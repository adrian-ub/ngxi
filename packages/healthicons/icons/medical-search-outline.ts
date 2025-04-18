import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalSearchOutlineIcon],svg[healthicons-medical-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 24h-4v-6h4v-4h6v4h4v6h-4v4h-6zm-2-2v-2h4v-4h2v4h4v2h-4v4h-2v-4z"></svg:path><svg:path d="M27 36c8.284 0 15-6.716 15-15S35.284 6 27 6s-15 6.716-15 15c0 3.782 1.4 7.238 3.71 9.876l-1.893 1.893l-2.707-.121l-6.524 6.524l4.242 4.242l6.472-6.471l-.004-2.825l1.828-1.828A14.94 14.94 0 0 0 27 36m0-2c7.18 0 13-5.82 13-13S34.18 8 27 8s-13 5.82-13 13s5.82 13 13 13M8.828 40.586l-1.414-1.414l4.486-4.487l1.397.063l.002 1.367z"></svg:path></svg:g>`,
})
export class HealthiconsMedicalSearchOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
