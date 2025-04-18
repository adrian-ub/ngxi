import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWrench02Icon],svg[hugeicons-wrench-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 7.106c0 1.452-1.41 2.79-3.53 4.884a3.525 3.525 0 0 1-4.94 0C7.41 9.895 6 8.557 6 7.105s.354-1.743 3.608-4.96c.314-.312.852-.092.852.347v3.312c0 .84.689 1.523 1.54 1.523c.85 0 1.54-.681 1.54-1.522V2.494c0-.44.54-.659.852-.347C17.646 5.363 18 5.654 18 7.106"></svg:path><svg:path d="M15 12v7.165C15 20.731 13.657 22 12 22s-3-1.27-3-2.835V12m3.006 7l-.006.006"></svg:path></svg:g>`,
})
export class HugeiconsWrench02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
