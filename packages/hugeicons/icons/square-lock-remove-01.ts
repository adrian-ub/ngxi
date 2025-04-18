import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSquareLockRemove01Icon],svg[hugeicons-square-lock-remove-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 22l3.5-3.5m0 0L21 15m-3.5 3.5L14 15m3.5 3.5L21 22m-10 0a91 91 0 0 1-4.374-.1a3.56 3.56 0 0 1-3.353-3.055C3.123 17.755 3 16.638 3 15.5s.123-2.255.273-3.345A3.56 3.56 0 0 1 6.626 9.1c1.443-.066 2.909-.1 4.523-.1s3.08.034 4.523.1A3.56 3.56 0 0 1 19 12M6.5 9V6.5a4.5 4.5 0 0 1 9 0V9" color="currentColor"></svg:path>`,
})
export class HugeiconsSquareLockRemove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
