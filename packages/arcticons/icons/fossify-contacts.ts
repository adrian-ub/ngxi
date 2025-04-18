import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFossifyContactsIcon],svg[arcticons-fossify-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.717 42.38c2.232 0 5.076-.387 4.759-6.743c-.31-6.22-10.38-9.372-18.476-9.372S5.834 29.418 5.524 35.637c-.317 6.356 2.527 6.743 4.76 6.743zm-4.416-27.46a9.301 9.301 0 1 1-18.602 0v0a9.301 9.301 0 1 1 18.602 0"></svg:path>`,
})
export class ArcticonsFossifyContactsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
