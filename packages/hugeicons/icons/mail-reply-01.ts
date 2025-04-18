import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailReply01Icon],svg[hugeicons-mail-reply-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m2 5l6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 5"></svg:path><svg:path d="M21.92 11.033q0-.739-.016-1.481c-.065-3.078-.098-4.616-1.225-5.756c-1.126-1.14-2.694-1.18-5.83-1.26a114 114 0 0 0-5.779 0c-3.136.08-4.704.12-5.83 1.26S2.08 6.474 2.016 9.552c-.021.99-.021 1.973 0 2.963c.065 3.077.097 4.616 1.224 5.756c1.126 1.14 2.694 1.18 5.83 1.259q1.448.037 2.89.037"></svg:path><svg:path d="M22 21.5c-.116-2.524-.013-3.443-1.656-4.62c-.808-.58-2.433-.961-4.626-.755m1.734-2.532l-2.297 2.153a.5.5 0 0 0-.003.706l2.3 2.188"></svg:path></svg:g>`,
})
export class HugeiconsMailReply01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
