import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCommentAddIcon],svg[proicons-comment-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.91 12.958a4 4 0 0 1-4 4h-4.368l-4.52 4.16a.5.5 0 0 1-.839-.368v-3.792H7.09a4 4 0 0 1-4-4V6.749a4 4 0 0 1 4-4h4.161"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 12a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m0-8.993a.5.5 0 0 1 .5.5V6h2.493a.5.5 0 1 1 0 1H18v2.493a.5.5 0 0 1-1 0V7h-2.493a.5.5 0 1 1 0-1H17V3.507a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class ProiconsCommentAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
