import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMedal06Icon],svg[hugeicons-medal-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.5 14.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0"></svg:path><svg:path d="M9 14.5c0-1.657 1.295-3 2.893-3h.214c1.598 0 2.893 1.343 2.893 3s-1.295 3-2.893 3h-.214C10.295 17.5 9 16.157 9 14.5M13.56 2l-2.561 5m7-5l-2.821 5.602M10.44 2L12 4.594M6 2l2.821 5.5"></svg:path></svg:g>`,
})
export class HugeiconsMedal06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
