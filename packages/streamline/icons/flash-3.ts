import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFlash3Icon],svg[streamline-flash-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.502 5.424L4.58 1.486A1 1 0 0 1 5.544.75h1.647a1 1 0 0 1 .965 1.263l-.594 2.175h1.589a1 1 0 0 1 .943 1.331L8.75 9.344h2.75l-5.125 4.125l-3.188-4.125h2.344l.782-2.656H4.466a1 1 0 0 1-.965-1.264Z"></svg:path>`,
})
export class StreamlineFlash3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
