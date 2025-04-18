import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare07Icon],svg[hugeicons-share-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 5.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-12 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m13 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M14.535 4.581a8 8 0 0 0-1.162-.081a8.15 8.15 0 0 0-7.132 4.163m13.472-1.168A7.9 7.9 0 0 1 21.5 12.5a7.9 7.9 0 0 1-.974 3.801m-4.644 3.81a8.2 8.2 0 0 1-2.509.389c-3.79 0-6.974-2.555-7.873-6.01"></svg:path></svg:g>`,
})
export class HugeiconsShare07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
