import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsFastForwardIcon],svg[pepicons-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.363 9.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V5.037c0-.908 1.112-1.346 1.731-.682l4.632 4.963Z"></svg:path><svg:path fill-rule="evenodd" d="M9.264 10L7 7.574v4.852L9.264 10Zm2.1.682a1 1 0 0 0 0-1.364L6.73 4.355C6.111 3.69 5 4.129 5 5.037v9.926c0 .908 1.112 1.346 1.731.682l4.632-4.963Z" clip-rule="evenodd"></svg:path><svg:path d="M16.363 9.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V5.037c0-.908 1.112-1.346 1.731-.682l4.632 4.963Z"></svg:path><svg:path fill-rule="evenodd" d="M14.264 10L12 7.574v4.852L14.264 10Zm2.1.682a1 1 0 0 0 0-1.364L11.73 4.355c-.619-.665-1.73-.226-1.73.682v9.926c0 .908 1.112 1.346 1.731.682l4.632-4.963Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsFastForwardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
