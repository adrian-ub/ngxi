import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintTextBubbleIcon],svg[pepicons-print-text-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6.102a2 2 0 0 1-2 2h-7.55S8.364 18 7.705 18s-1.056-1.898-1.056-1.898H6a2 2 0 0 1-2-2z" clip-rule="evenodd" opacity=".2"></svg:path><svg:path fill-rule="evenodd" d="M1.5 12.102a2.5 2.5 0 0 0 2.5 2.5h.249c.307 1.238.741 1.898 1.455 1.898c.603 0 1.519-.62 2.94-1.898H16a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 16 3.5H4A2.5 2.5 0 0 0 1.5 6zm1 0V6A1.5 1.5 0 0 1 4 4.5h12A1.5 1.5 0 0 1 17.5 6v6.102a1.5 1.5 0 0 1-1.5 1.5H8.257l-.143.13C6.834 14.898 5.96 15.5 5.704 15.5c-.092 0-.35-.463-.567-1.5l-.083-.398H4a1.5 1.5 0 0 1-1.5-1.5" clip-rule="evenodd"></svg:path><svg:circle cx="7" cy="9" r="1"></svg:circle><svg:circle cx="10" cy="9" r="1"></svg:circle><svg:circle cx="13" cy="9" r="1"></svg:circle></svg:g>`,
})
export class PepiconsPrintTextBubbleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
