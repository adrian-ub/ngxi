import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsTrashPrintIcon],svg[pepicons-trash-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".8"><svg:rect width="10" height="11.5" x="7" y="7" rx="1"></svg:rect><svg:path fill-rule="evenodd" d="M10.016 4.25A2.003 2.003 0 0 1 12 2.5c1.018 0 1.86.765 1.984 1.75H17a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h3.016Z" clip-rule="evenodd"></svg:path></svg:g><svg:path d="M8.5 14.999a.5.5 0 1 1-1 0v-6a.5.5 0 0 1 1 0v6Zm2 0a.5.5 0 1 1-1 0v-6a.5.5 0 0 1 1 0v6Zm2 0a.5.5 0 1 1-1 0v-6a.5.5 0 0 1 1 0v6Zm-1-10.5h-3a1.501 1.501 0 0 1 3-.001Z"></svg:path><svg:path d="M4.5 4.999a.5.5 0 1 1 0-1h11a.5.5 0 0 1 0 1h-11Z"></svg:path><svg:path fill-rule="evenodd" d="M14.5 5.5h-9A.5.5 0 0 0 5 6v11a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5ZM6 16.5v-10h8v10H6Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsTrashPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
