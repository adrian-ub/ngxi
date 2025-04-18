import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesDeleteBinOutlineIcon],svg[bubbles-delete-bin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.25 21H6.75a1.5 1.5 0 0 1-1.5-1.5V6h13.5v13.5a1.5 1.5 0 0 1-1.5 1.5" clip-rule="evenodd"></svg:path><svg:path d="M9.75 16.5v-6m4.5 6v-6M2.25 6h19.5"></svg:path><svg:path d="M14.25 3h-4.5a1.5 1.5 0 0 0-1.5 1.5V6h7.5V4.5a1.5 1.5 0 0 0-1.5-1.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class BubblesDeleteBinOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
