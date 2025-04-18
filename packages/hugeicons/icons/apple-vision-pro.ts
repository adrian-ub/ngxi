import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAppleVisionProIcon],svg[hugeicons-apple-vision-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 17.5C4 17.5 2 16 2 12.5c0-4 3-6 10-6s10 2 10 6c0 3.5-2 5-4.5 5S13.5 15 12 15s-3 2.5-5.5 2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsAppleVisionProIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
