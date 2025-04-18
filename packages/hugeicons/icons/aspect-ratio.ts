import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAspectRatioIcon],svg[hugeicons-aspect-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 12c0-4.243 0-6.364 1.172-7.682S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.318S22 7.758 22 12s0 6.364-1.172 7.682S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.318S2 16.242 2 12"></svg:path><svg:path d="M2 9h8c2.828 0 4.243 0 5.121.879C16 10.757 16 12.172 16 15v6m-6 0V9"></svg:path></svg:g>`,
})
export class HugeiconsAspectRatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
