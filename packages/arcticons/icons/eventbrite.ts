import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEventbriteIcon],svg[arcticons-eventbrite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.819 32.477c-1.33 4.977-5.217 9.12-10.553 10.528c-7.922 2.09-16.038-2.636-18.13-10.558l-2.46-9.323c-2.09-7.922 2.636-16.038 10.558-18.13c7.922-2.09 16.039 2.637 18.13 10.559l1.23 4.661l-28.688 7.572"></svg:path>`,
})
export class ArcticonsEventbriteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
