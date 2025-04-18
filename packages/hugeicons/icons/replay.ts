import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReplayIcon],svg[hugeicons-replay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2a9.98 9.98 0 0 1 7.6 3.5"></svg:path><svg:path d="M20 2.5V6h-3.5m-.555 6.358c-.176.626-1.012 1.07-2.682 1.955c-1.615.856-2.422 1.284-3.073 1.112a1.66 1.66 0 0 1-.712-.392C9 14.583 9 13.709 9 11.963c0-1.747 0-2.62.478-3.07c.198-.186.443-.321.712-.393c.65-.172 1.458.256 3.073 1.113c1.67.886 2.506 1.328 2.682 1.955c.073.259.073.531 0 .79"></svg:path></svg:g>`,
})
export class HugeiconsReplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
