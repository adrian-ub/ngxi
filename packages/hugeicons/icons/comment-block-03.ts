import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommentBlock03Icon],svg[hugeicons-comment-block-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9.6 8.05l4.9 4.9m1.05-2.45a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0"></svg:path><svg:path d="M2 10.5C2 5.5 6 3 12 3s10 2.5 10 7.5S18 18 12 18v3S2 18 2 10.5"></svg:path></svg:g>`,
})
export class HugeiconsCommentBlock03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
