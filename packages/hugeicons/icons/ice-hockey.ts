import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsIceHockeyIcon],svg[hugeicons-ice-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.634 16.517L22 3m-4.453 0l-5.173 9.787c-.635 1.2-1.028 1.362-2.34.962c-1.673-.51-5.02-2.28-6.686-1.507c-1.667.774-1.808 5.936-.31 6.994c1.678 1.185 6.649.758 8.758.274M8 13l-2 7"></svg:path><svg:path d="M12 19c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2"></svg:path></svg:g>`,
})
export class HugeiconsIceHockeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
