import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCommentMultipleIcon],svg[proicons-comment-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.985 5.76a3 3 0 0 0-3 3v5.982a3 3 0 0 0 3 3h.446v3.017a.5.5 0 0 0 .839.367l3.67-3.385h4.045a3 3 0 0 0 3-3V8.76a3 3 0 0 0-3-3z"></svg:path><svg:path d="M6.985 2.76h8a6 6 0 0 1 6 6v4.982"></svg:path></svg:g>`,
})
export class ProiconsCommentMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
