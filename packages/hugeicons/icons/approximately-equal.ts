import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsApproximatelyEqualIcon],svg[hugeicons-approximately-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7.927C6.667 4.928 9.333 5.806 12 8s5.333 3.072 8 .073M4 15.927c2.667-2.999 5.333-2.121 8 .073s5.333 3.072 8 .073" color="currentColor"></svg:path>`,
})
export class HugeiconsApproximatelyEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
