import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBookBookmark02Icon],svg[hugeicons-book-bookmark-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 16.929V10c0-3.771 0-5.657-1.172-6.828S16.271 2 12.5 2h-1C7.729 2 5.843 2 4.672 3.172S3.5 6.229 3.5 10v9.5"></svg:path><svg:path d="M8 3v3.69c0 .74 0 1.11.238 1.254q.014.01.032.017c.248.126.571-.064 1.219-.445c.484-.284.725-.427.992-.432h.037c.268.005.51.148.993.432c.648.381.971.571 1.22.445l.03-.017C13 7.8 13 7.43 13 6.69V3m7.5 14H6a2.5 2.5 0 0 0 0 5h14.5"></svg:path><svg:path d="M20.5 17a2.5 2.5 0 0 0 0 5"></svg:path></svg:g>`,
})
export class HugeiconsBookBookmark02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
