import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phQuotesDuotoneIcon],svg[ph-quotes-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M108 72v72H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8m108-8h-60a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h68V72a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M100 56H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16m0 80H40V72h60Zm116-80h-60a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16m0 80h-60V72h60Z"></svg:path></svg:g>`,
})
export class PhQuotesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
