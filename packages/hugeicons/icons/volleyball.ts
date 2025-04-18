import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVolleyballIcon],svg[hugeicons-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M8.12 3c-.445 1.619-.356 5.586 3.568 8.5m0 0c4.942-1.33 8.437-.85 10.312.85m-10.312-.85C12.252 16.188 8.875 19.15 7 20"></svg:path><svg:path d="M9 8c2.087-1.886 7.326-2.872 11.5-.986M16.889 11c.589 2.895-1.175 8.188-4.889 11m-2-5c-2.625-1.26-5.842-6.04-6-11"></svg:path></svg:g>`,
})
export class HugeiconsVolleyballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
