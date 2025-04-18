import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLingodeerIcon],svg[arcticons-lingodeer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="m12.434 15.892l2.01 24.96h19.113l2.008-24.96z"></svg:path><svg:path stroke-linejoin="round" d="M22.629 25.139a6.347 6.347 0 1 1-12.694 0a6.347 6.347 0 0 1 12.694 0m2.742 0a6.347 6.347 0 1 0 12.694 0a6.347 6.347 0 0 0-12.694 0m-3.094 11.426h3.446l-1.718 1.705zm13.92-29.417c-.424 3.53-1.639 6.605-4.672 8.636M11.803 7.148c.424 3.53 1.639 6.605 4.672 8.636"></svg:path><svg:path stroke-miterlimit="15.118" d="M38.36 8.156c-.571 1.833-1.918 4.512-3.908 4.64M9.64 8.157c.571 1.833 1.918 4.512 3.908 4.64"></svg:path><svg:path stroke-linejoin="round" d="m37.211 15.892l5.289-1.933l-1.298 3.69zm-26.422 0l-5.29-1.933l1.3 3.69zm18.424 6.895c.486 0 .877.39.877.876v3.442c0 .485-.391.876-.877.876s-.876-.39-.876-.876v-3.442c0-.486.39-.876.876-.876m-10.426 0a.875.875 0 0 0-.877.876v3.442c0 .485.391.876.877.876s.876-.39.876-.876v-3.442a.875.875 0 0 0-.876-.876m3.987 2.303q1.226-.585 2.452 0"></svg:path></svg:g>`,
})
export class ArcticonsLingodeerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
