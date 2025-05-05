import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPhoneLockIcon],svg[hugeicons-phone-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.5 2h-4L9 3h3zm3 9v-1a1.5 1.5 0 0 1 3 0v1M15 15.5h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1"></svg:path><svg:path d="M16.997 6c-.014-1.707-.109-2.647-.73-3.268C15.537 2 14.358 2 12 2H9c-2.357 0-3.536 0-4.268.732S4 4.643 4 7v10c0 2.357 0 3.535.732 4.268S6.643 22 9 22h3c2.357 0 3.536 0 4.268-.732c.62-.62.715-1.561.73-3.268"></svg:path></svg:g>`,
})
export class HugeiconsPhoneLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
