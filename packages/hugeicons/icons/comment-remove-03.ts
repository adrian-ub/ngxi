import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommentRemove03Icon],svg[hugeicons-comment-remove-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M2 10.5C2 5.5 6 3 12 3s10 2.5 10 7.5S18 18 12 18v3S2 18 2 10.5m7-3l3 3m0 0l3 3m-3-3l3-3m-3 3l-3 3" color="currentColor"></svg:path>`,
})
export class HugeiconsCommentRemove03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
