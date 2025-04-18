import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBookDownloadIcon],svg[hugeicons-book-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 16.929V10c0-3.771 0-5.657-1.172-6.828S16.271 2 12.5 2h-1C7.729 2 5.843 2 4.672 3.172S3.5 6.229 3.5 10v9.5"></svg:path><svg:path d="M20.5 17H6a2.5 2.5 0 0 0 0 5h14.5M9 10.327l1.409 1.486C11.159 12.604 11.534 13 12 13s.841-.396 1.591-1.187L15 10.326m-3 2.587V6"></svg:path><svg:path d="M20.5 17a2.5 2.5 0 0 0 0 5"></svg:path></svg:g>`,
})
export class HugeiconsBookDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
