import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRblMobankIcon],svg[arcticons-rbl-mobank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 27.541a14.5 14.5 0 0 1 10.747-14.006"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 4.5v39h6v-4.297A14.5 14.5 0 0 0 24 42c8.008 0 14.5-6.492 14.5-14.5c-.002-7.62-5.9-13.938-13.502-14.463v6.024a8.5 8.5 0 1 1-1.996 0v-6.018a14.5 14.5 0 0 0-7.502 2.754V4.5zm6 39v-16"></svg:path>`,
})
export class ArcticonsRblMobankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
