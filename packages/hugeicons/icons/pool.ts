import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoolIcon],svg[hugeicons-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 21h-1c-1.451 0-2.722-.859-3-2c-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2H2M19 3l-.265.088c-1.32.44-1.98.66-2.357 1.184S16 5.492 16 6.883V17M11 3l-.265.088c-1.32.44-1.98.66-2.357 1.184S8 5.492 8 6.883V17M8 7h8m-8 4h8m-8 4h8" color="currentColor"></svg:path>`,
})
export class HugeiconsPoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
