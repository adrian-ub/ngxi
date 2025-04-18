import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPricespyIcon],svg[arcticons-pricespy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:circle cx="24" cy="24" r="10.5"></svg:circle><svg:circle cx="24" cy="24" r="5"></svg:circle><svg:path d="M11.34 32.946A15.43 15.43 0 0 1 8.5 24a15.43 15.43 0 0 1 2.865-8.98L9.4 12.976a18.4 18.4 0 0 1 3.637-3.623l2.031 1.977A15.43 15.43 0 0 1 24 8.5a15.43 15.43 0 0 1 8.913 2.817l2.07-1.949a18.4 18.4 0 0 1 3.61 3.598l-1.972 2.033a15.43 15.43 0 0 1 2.879 9a15.43 15.43 0 0 1-2.822 8.92l1.954 2.063a18.4 18.4 0 0 1-3.636 3.64l-1.998-2A15.43 15.43 0 0 1 24 39.5c-3.346 0-6.445-1.06-8.978-2.864l-2.06 1.954a18.4 18.4 0 0 1-3.568-3.573z"></svg:path></svg:g>`,
})
export class ArcticonsPricespyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
