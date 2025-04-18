import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpenbankIcon],svg[arcticons-openbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.58 28.043a3.96 3.96 0 0 1-7.92 0v-1.191"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.414 18.696a7.946 7.946 0 1 0 1.978 5.246l1.987-1.806H43.5v5.907a3.96 3.96 0 0 1-7.92 0v-1.191"></svg:path>`,
})
export class ArcticonsOpenbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
