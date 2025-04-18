import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintBookmarkIcon],svg[pepicons-print-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.75 4c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v14a1.25 1.25 0 0 1-2.137.881L11 14.741l-4.113 4.14A1.25 1.25 0 0 1 4.75 18zm2.5 1.25v9.718l2.863-2.882a1.25 1.25 0 0 1 1.774 0l2.863 2.882V5.25z" opacity=".2"></svg:path><svg:path d="M4.5 3a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.855.352L10 12.676l-4.645 4.676A.5.5 0 0 1 4.5 17zm1 .5v12.287l4.145-4.172a.5.5 0 0 1 .71 0l4.145 4.172V3.5z"></svg:path></svg:g>`,
})
export class PepiconsPrintBookmarkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
