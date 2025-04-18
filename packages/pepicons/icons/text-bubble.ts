import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsTextBubbleIcon],svg[pepicons-text-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="7" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="13" cy="9" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6.102a2 2 0 0 1-2 2H8.45S6.364 16 5.705 16c-.66 0-1.056-1.898-1.056-1.898H4a2 2 0 0 1-2-2V6Z" clip-rule="evenodd"></svg:path><svg:circle cx="7" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="13" cy="9" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M1 6v6.102A3 3 0 0 0 3.864 15.1c.36 1.224.894 1.901 1.84 1.901c.757 0 1.684-.609 3.13-1.898H16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3Zm7.064 7.102l-.286.26c-.864.786-1.543 1.304-1.869 1.522a5.58 5.58 0 0 1-.283-.986l-.166-.796H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6.102a1 1 0 0 1-1 1H8.064Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsTextBubbleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
