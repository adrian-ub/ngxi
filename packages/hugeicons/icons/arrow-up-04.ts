import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowUp04Icon],svg[hugeicons-arrow-up-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 10v10m1.603-14.586l.76.967c1.234 1.565 1.851 2.348 1.57 2.984c-.281.635-1.245.635-3.172.635H11.24c-1.927 0-2.89 0-3.172-.635c-.281-.636.336-1.419 1.57-2.984l.76-.967C11.14 4.471 11.511 4 12 4s.86.471 1.603 1.414" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowUp04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
