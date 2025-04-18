import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragDropIcon],svg[hugeicons-drag-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 6h.006M6 12h.006M6 18h.006m5.99-12h.007m-.006 6h.006m-.006 6h.006m5.99-12H18m-.006 6H18m-.006 6H18" color="currentColor"></svg:path>`,
})
export class HugeiconsDragDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
