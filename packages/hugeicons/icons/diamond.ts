import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiamondIcon],svg[hugeicons-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.92 5.92c2.238-2.237 3.357-3.355 4.666-3.724a5.2 5.2 0 0 1 2.828 0c1.309.369 2.428 1.487 4.665 3.725s3.356 3.356 3.725 4.665a5.2 5.2 0 0 1 0 2.828c-.369 1.309-1.487 2.428-3.725 4.665s-3.356 3.356-4.665 3.725a5.2 5.2 0 0 1-2.828 0c-1.309-.369-2.428-1.487-4.665-3.725s-3.356-3.356-3.725-4.665a5.2 5.2 0 0 1 0-2.828C2.565 9.277 3.683 8.158 5.92 5.92" color="currentColor"></svg:path>`,
})
export class HugeiconsDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
