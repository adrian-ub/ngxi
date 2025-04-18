import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBookBookmark01Icon],svg[hugeicons-book-bookmark-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 22H6.5A2.5 2.5 0 0 1 4 19.5m0 0v-8.816c0-2.985 0-4.477.757-5.525a4 4 0 0 1 .902-.903C6.707 3.5 8.199 3.5 11.184 3.5c.977 0 2.166.051 3.152.064c.899.013 1.349.019 2.186-.13c.838-.147.927-.181 1.106-.25c.77-.292 1.5-.748 2.372-1.184v9.5c0 1.864 0 2.796-.305 3.53a4 4 0 0 1-2.164 2.166c-.735.304-1.667.304-3.531.304H6a2 2 0 0 0-2 2M18 17v5"></svg:path><svg:path d="M8 4v3.69c0 .74 0 1.11.238 1.254q.014.01.032.017c.248.126.571-.064 1.219-.445c.484-.284.725-.427.992-.432h.037c.268.005.51.148.993.432c.648.381.971.571 1.22.445l.03-.017C13 8.8 13 8.43 13 7.69V4"></svg:path></svg:g>`,
})
export class HugeiconsBookBookmark01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
