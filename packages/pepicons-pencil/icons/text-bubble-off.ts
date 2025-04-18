import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTextBubbleOffIcon],svg[pepicons-pencil-text-bubble-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.5 12.102a2.5 2.5 0 0 0 2.5 2.5h.249c.307 1.238.741 1.898 1.455 1.898c.603 0 1.519-.62 2.94-1.898H16a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 16 3.5H4A2.5 2.5 0 0 0 1.5 6zm1 0V6A1.5 1.5 0 0 1 4 4.5h12A1.5 1.5 0 0 1 17.5 6v6.102a1.5 1.5 0 0 1-1.5 1.5H8.257l-.143.13C6.834 14.898 5.96 15.5 5.704 15.5c-.092 0-.35-.463-.567-1.5l-.083-.398H4a1.5 1.5 0 0 1-1.5-1.5" clip-rule="evenodd"></svg:path><svg:circle cx="7" cy="9" r="1"></svg:circle><svg:circle cx="10" cy="9" r="1"></svg:circle><svg:circle cx="13" cy="9" r="1"></svg:circle><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilTextBubbleOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
