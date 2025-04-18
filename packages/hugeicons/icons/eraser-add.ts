import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEraserAddIcon],svg[hugeicons-eraser-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h3c1.963 0 2.944 0 3.789.422c.844.423 1.433 1.208 2.611 2.778C21.133 9.511 22 10.667 22 12s-.867 2.489-2.6 4.8c-1.178 1.57-1.767 2.355-2.611 2.778C15.944 20 14.963 20 13 20h-3c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m9-4v8m4-4H7" color="currentColor"></svg:path>`,
})
export class HugeiconsEraserAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
