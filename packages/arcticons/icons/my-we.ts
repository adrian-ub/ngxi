import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyWeIcon],svg[arcticons-my-we-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M40.02 27.507S40.02 29 36.856 29H28.3s-3.012.025-3.012-3.543v-3.569s-.025-2.885 2.658-2.885h9.896s2.53-.177 2.53 2.202l.026 2.78H25.315M15.175 19v7.7a2.3 2.3 0 0 1-2.3 2.3H9.9a2.3 2.3 0 0 1-2.3-2.3V19"></svg:path><svg:path d="M22.75 19v7.7a2.3 2.3 0 0 1-2.3 2.3h-2.975a2.3 2.3 0 0 1-2.3-2.3V19"></svg:path></svg:g>`,
})
export class ArcticonsMyWeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
