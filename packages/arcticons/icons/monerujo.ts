import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonerujoIcon],svg[arcticons-monerujo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.65 44a7.47 7.47 0 0 0 7.49-7.75V19.74c0-3.16-3.94-6.93-7.88-7s-7.88 3.73-7.88 7.13c0-3.36-3.75-7.21-7.58-7.28c-4-.09-8.08 3.37-8.08 7.14v15.7m15.66.01v-15.7M7.72 12.69v7"></svg:path><svg:circle cx="39.13" cy="6.48" r="1.54" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle>`,
})
export class ArcticonsMonerujoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
