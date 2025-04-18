import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideDraftingCompassIcon],svg[lucide-drafting-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12.99 6.74l1.93 3.44M19.136 12a10 10 0 0 1-14.271 0M21 21l-2.16-3.84M3 21l8.02-14.26"></svg:path><svg:circle cx="12" cy="5" r="2"></svg:circle></svg:g>`,
})
export class LucideDraftingCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
