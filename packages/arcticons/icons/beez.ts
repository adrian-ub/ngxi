import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBeezIcon],svg[arcticons-beez-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.57 30.643a7.792 7.792 0 1 1 15.584 0v5.065a7.792 7.792 0 1 1-15.584 0m0 7.792V12.331m9.328 7.287c-1.283-8.122 2.565-12.396 8.549-14.106m-5.343 14.106c2.35-8.122 9.312-9.129 14.32-8.122"></svg:path><svg:circle cx="29.129" cy="5.118" r=".75" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M38.85 11.924a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class ArcticonsBeezIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
