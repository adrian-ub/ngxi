import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStopWatchIcon],svg[hugeicons-stop-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m18 5.5l1-1m-14 0l1 1"></svg:path><svg:circle cx="12" cy="13" r="9"></svg:circle><svg:path d="M12 9.5v4l2 2m-2-12V2m-2 0h4"></svg:path></svg:g>`,
})
export class HugeiconsStopWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
